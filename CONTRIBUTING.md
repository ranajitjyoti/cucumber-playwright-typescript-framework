# Contributing to Cucumber Playwright TypeScript Framework

Thank you for your interest in contributing to this project! We welcome contributions from the community and are pleased to have you join us.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots or animated GIFs if applicable**
- **Include your environment details** (OS, Node.js version, browser version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Describe the current behavior and explain the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Add tests** for any new functionality
4. **Ensure all tests pass** by running `npm test`
5. **Update documentation** if necessary
6. **Create a pull request** with a clear title and description

## Development Setup

1. **Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/cucumber-playwright-typescript-framework.git
cd cucumber-playwright-typescript-framework
```

2. **Install dependencies**
```bash
npm install
npm run setup
```

3. **Create a branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes and test**
```bash
npm test
npm run html-report
```

## Coding Standards

### TypeScript Guidelines

- Use TypeScript for all new code
- Follow existing code style and patterns
- Use meaningful variable and function names
- Add type annotations where helpful
- Avoid `any` types when possible

### Page Object Model

- Create page objects for new pages/components
- Use descriptive method names
- Keep page objects focused and cohesive
- Use proper selectors (prefer data-testid over CSS classes)

### Feature Files

- Write clear, readable Gherkin scenarios
- Use appropriate tags for test categorization
- Follow Given-When-Then structure
- Keep scenarios focused and independent

### Step Definitions

- Keep step definitions simple and focused
- Reuse existing steps when possible
- Use proper error handling
- Add appropriate timeouts for async operations

## Testing Guidelines

### Writing Tests

- Write tests for new functionality
- Ensure tests are independent and can run in any order
- Use appropriate test data
- Clean up after tests when necessary

### Test Categories

Use appropriate tags for your tests:

- `@smoke` - Critical functionality
- `@regression` - Full regression suite
- `@integration` - Integration tests
- `@api` - API tests
- `@ui` - UI tests

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update feature documentation
- Include examples for new functionality

## Commit Messages

Use clear and meaningful commit messages:

```
feat: add new payment method selection
fix: resolve timeout issue in checkout flow
docs: update installation instructions
test: add tests for user authentication
```

### Commit Message Format

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `style`: Code style changes
- `chore`: Maintenance tasks

## Review Process

1. **Automated Checks**: All PRs must pass CI/CD checks
2. **Code Review**: At least one maintainer review required
3. **Testing**: Ensure all tests pass
4. **Documentation**: Verify documentation is updated
5. **Merge**: Maintainer will merge after approval

## Release Process

1. Version bumping follows [Semantic Versioning](https://semver.org/)
2. Releases are created from the `main` branch
3. Release notes are generated automatically
4. npm packages are published automatically

## Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: ranajitjyoti@example.com for direct contact

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to make this project better! 🚀