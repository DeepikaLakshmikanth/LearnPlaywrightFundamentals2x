/**
 * Custom Test Report Generator
 * Generates formatted HTML and JSON reports from Playwright test results
 */

import * as fs from 'fs';
import * as path from 'path';

interface TestResult {
  status: 'passed' | 'failed' | 'skipped' | 'timedOut';
  startTime: string;
  duration: number;
  title?: string;
  error?: {
    message: string;
    stack?: string;
  };
}

interface ReportData {
  timestamp: string;
  totalTests: number;
  passed: number;
  failed: number;
  skipped: number;
  duration: number;
  successRate: number;
  tests: TestResult[];
}

export class ReportGenerator {
  private testResults: any;
  private reportData: ReportData;

  constructor(jsonResultsPath: string) {
    const rawData = fs.readFileSync(jsonResultsPath, 'utf-8');
    this.testResults = JSON.parse(rawData);
    this.reportData = this.parseResults();
  }

  private parseResults(): ReportData {
    const stats = this.testResults.stats || {};
    const suites = this.testResults.suites || [];

    const tests: TestResult[] = [];
    let totalTests = 0;
    let passedTests = 0;
    let failedTests = 0;
    let skippedTests = 0;

    suites.forEach((suite: any) => {
      if (suite.tests) {
        suite.tests.forEach((test: any) => {
          totalTests++;
          tests.push({
            status: test.status,
            startTime: test.startTime,
            duration: test.duration,
            title: test.title,
            error: test.errors && test.errors[0],
          });

          if (test.status === 'passed') passedTests++;
          else if (test.status === 'failed') failedTests++;
          else if (test.status === 'skipped') skippedTests++;
        });
      }
    });

    const duration = stats.duration || 0;
    const successRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) : '0.00';

    return {
      timestamp: new Date().toISOString(),
      totalTests,
      passed: passedTests,
      failed: failedTests,
      skipped: skippedTests,
      duration,
      successRate: parseFloat(successRate),
      tests,
    };
  }

  generateHTMLReport(outputPath: string = './test-report.html'): string {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playwright Test Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        
        .summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            padding: 40px;
            background: #f8f9fa;
            border-bottom: 2px solid #e9ecef;
        }
        
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-left: 4px solid #667eea;
        }
        
        .stat-card.passed {
            border-left-color: #28a745;
        }
        
        .stat-card.failed {
            border-left-color: #dc3545;
        }
        
        .stat-card.skipped {
            border-left-color: #ffc107;
        }
        
        .stat-number {
            font-size: 2.5em;
            font-weight: bold;
            color: #667eea;
            margin: 10px 0;
        }
        
        .stat-card.passed .stat-number {
            color: #28a745;
        }
        
        .stat-card.failed .stat-number {
            color: #dc3545;
        }
        
        .stat-card.skipped .stat-number {
            color: #ffc107;
        }
        
        .stat-label {
            color: #6c757d;
            font-size: 0.95em;
            margin-top: 10px;
        }
        
        .details {
            padding: 40px;
        }
        
        .test-list {
            list-style: none;
        }
        
        .test-item {
            background: white;
            border: 1px solid #e9ecef;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.2s;
        }
        
        .test-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .test-info {
            flex: 1;
        }
        
        .test-title {
            font-weight: 500;
            color: #333;
            margin-bottom: 5px;
        }
        
        .test-duration {
            color: #6c757d;
            font-size: 0.9em;
        }
        
        .badge {
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 500;
            text-transform: uppercase;
        }
        
        .badge.passed {
            background: #d4edda;
            color: #155724;
        }
        
        .badge.failed {
            background: #f8d7da;
            color: #721c24;
        }
        
        .badge.skipped {
            background: #fff3cd;
            color: #856404;
        }
        
        .error-message {
            background: #fff5f5;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            border-left: 3px solid #dc3545;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            border-top: 1px solid #e9ecef;
        }
        
        .progress-bar {
            height: 6px;
            background: #e9ecef;
            border-radius: 3px;
            overflow: hidden;
            margin-top: 10px;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #28a745, #20c997);
            transition: width 0.3s;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎭 Playwright Test Report</h1>
            <p>Test Execution Summary</p>
        </div>
        
        <div class="summary">
            <div class="stat-card">
                <div class="stat-label">Total Tests</div>
                <div class="stat-number">${this.reportData.totalTests}</div>
            </div>
            <div class="stat-card passed">
                <div class="stat-label">Passed</div>
                <div class="stat-number">${this.reportData.passed}</div>
            </div>
            <div class="stat-card failed">
                <div class="stat-label">Failed</div>
                <div class="stat-number">${this.reportData.failed}</div>
            </div>
            <div class="stat-card skipped">
                <div class="stat-label">Skipped</div>
                <div class="stat-number">${this.reportData.skipped}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Success Rate</div>
                <div class="stat-number">${this.reportData.successRate}%</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${this.reportData.successRate}%"></div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Duration</div>
                <div class="stat-number">${(this.reportData.duration / 1000).toFixed(2)}s</div>
            </div>
        </div>
        
        <div class="details">
            <h2 style="margin-bottom: 20px;">Test Results</h2>
            <ul class="test-list">
                ${this.reportData.tests
                  .map(
                    (test) => `
                    <li class="test-item">
                        <div class="test-info">
                            <div class="test-title">${test.title || 'Unknown Test'}</div>
                            <div class="test-duration">⏱️ ${test.duration}ms</div>
                            ${
                              test.error
                                ? `<div class="error-message"><strong>Error:</strong> ${test.error.message}</div>`
                                : ''
                            }
                        </div>
                        <span class="badge ${test.status}">${test.status}</span>
                    </li>
                `
                  )
                  .join('')}
            </ul>
        </div>
        
        <div class="footer">
            <p>Report generated on ${new Date().toLocaleString()}</p>
            <p>🎯 Playwright Test Automation Framework</p>
        </div>
    </div>
</body>
</html>
    `;

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);
    console.log(`✅ HTML Report generated: ${outputPath}`);
    return outputPath;
  }

  generateJSONReport(outputPath: string = './test-report.json'): string {
    const jsonReport = JSON.stringify(this.reportData, null, 2);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, jsonReport);
    console.log(`✅ JSON Report generated: ${outputPath}`);
    return outputPath;
  }

  generateMarkdownReport(outputPath: string = './TEST_REPORT.md'): string {
    const md = `# Test Execution Report

**Generated:** ${new Date().toLocaleString()}

## 📊 Summary

| Metric | Value |
|--------|-------|
| Total Tests | ${this.reportData.totalTests} |
| Passed | ${this.reportData.passed} ✅ |
| Failed | ${this.reportData.failed} ❌ |
| Skipped | ${this.reportData.skipped} ⏭️ |
| Success Rate | ${this.reportData.successRate}% |
| Duration | ${(this.reportData.duration / 1000).toFixed(2)}s |

## 🔍 Test Results

${this.reportData.tests
  .map(
    (test, idx) => `
### ${idx + 1}. ${test.title || 'Unknown Test'}
- **Status:** ${test.status.toUpperCase()}
- **Duration:** ${test.duration}ms
${test.error ? `- **Error:** \`\`\`\n${test.error.message}\n\`\`\`` : ''}
`
  )
  .join('\n')}

---

*Report generated by Playwright Test Report Generator*
    `;

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, md);
    console.log(`✅ Markdown Report generated: ${outputPath}`);
    return outputPath;
  }

  getSummary() {
    return {
      timestamp: this.reportData.timestamp,
      totalTests: this.reportData.totalTests,
      passed: this.reportData.passed,
      failed: this.reportData.failed,
      skipped: this.reportData.skipped,
      successRate: `${this.reportData.successRate}%`,
      duration: `${(this.reportData.duration / 1000).toFixed(2)}s`,
    };
  }
}

// Export for use in scripts
export default ReportGenerator;
