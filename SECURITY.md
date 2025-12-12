# Security Policy

## Supported Versions

We actively support the following versions of this project with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our software seriously. If you believe you have found a security vulnerability in this project, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **ranajitjyoti@example.com**

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours.
- **Initial Response**: We will send a more detailed response within 72 hours indicating the next steps in handling your report.
- **Progress Updates**: We will keep you informed of the progress towards a fix and full announcement.
- **Credit**: We may ask if you would like to be credited for the discovery when we announce the fix.

### Security Best Practices

When using this framework:

1. **Environment Variables**: Never commit sensitive data like passwords, API keys, or tokens to the repository
2. **Dependencies**: Regularly update dependencies to their latest secure versions
3. **Access Control**: Limit access to test environments and sensitive test data
4. **Test Data**: Use mock or anonymized data for testing, never production data
5. **Secrets Management**: Use secure secret management solutions for CI/CD pipelines

### Dependency Security

This project uses automated dependency scanning through:

- **Dependabot**: Automatically creates pull requests for dependency updates
- **npm audit**: Regular security audits of npm packages
- **GitHub Security Advisories**: Monitoring for known vulnerabilities

### CI/CD Security

Our GitHub Actions workflows follow security best practices:

- Minimal required permissions
- Secure handling of secrets
- Regular updates of action versions
- No exposure of sensitive information in logs

## Responsible Disclosure

We believe in responsible disclosure and will work with security researchers to address any vulnerabilities found in our project. We commit to:

- Acknowledging your report promptly
- Working with you to understand and resolve the issue
- Keeping you informed throughout the process
- Recognizing your contribution (if desired)

Thank you for helping keep our project and our users safe!