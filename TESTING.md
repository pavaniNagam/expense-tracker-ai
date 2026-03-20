# Testing Guide for Expense Tracker AI

## Overview

Testing infrastructure is set up with **Jest** and **React Testing Library** for comprehensive test coverage of components, utilities, and API endpoints.

## Installation & Setup

Testing dependencies have been installed:

- `jest` - Testing framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers for DOM elements
- `ts-jest` - TypeScript support for Jest
- `jest-environment-jsdom` - DOM environment for testing

Configuration files:

- `jest.config.js` - Jest configuration with path aliases
- `jest.setup.js` - Testing setup and custom matchers

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Generate coverage report
npm test:coverage
```

## Test Structure

Tests are located in the `__tests__/` directory, mirroring the source structure:

```
__tests__/
├── api/
│   └── users.test.ts
├── components/
│   ├── button.test.tsx
│   ├── calculator.test.tsx
│   ├── card.test.tsx
│   ├── features.test.tsx
│   ├── footer.test.tsx
│   └── hero.test.tsx
└── lib/
    └── prisma.test.ts
```

## Test Categories

### 1. Component Tests (`__tests__/components/`)

These test individual React components for correct rendering and behavior.

#### Hero Component (`hero.test.tsx`)

- Renders hero section correctly
- Displays user count
- Has proper responsive design classes
- Maintains structural integrity

#### Calculator Component (`calculator.test.tsx`)

- Renders with proper section structure
- Contains proper layout classes
- Has accessible calculator section ID
- Renders content correctly

#### Features Component (`features.test.tsx`)

- Renders features section
- Has responsive layout classes
- Uses proper styling
- Contains feature content

#### Footer Component (`footer.test.tsx`)

- Renders footer element
- Maintains semantic structure
- Has responsive layout

#### Button Component (`button.test.tsx`)

- Renders button element with text
- Supports different variants (default, outline, ghost)
- Supports different sizes (sm, lg)
- Handles disabled state

#### Card Component (`card.test.tsx`)

- Renders card element
- Supports CardHeader, CardTitle, CardDescription, CardContent
- Renders complete card structure

### 2. API Tests (`__tests__/api/`)

These test API endpoints and server functions.

#### Users Endpoint (`users.test.ts`)

- Currently a placeholder (full integration tests require database setup)
- Structure ready for:
  - Authentication validation
  - User listing with pagination
  - Error handling

### 3. Library Tests (`__tests__/lib/`)

These test utility libraries and services.

#### Prisma Client (`prisma.test.ts`)

- Validates Prisma schema configuration
- Placeholder for full database integration tests

## Writing New Tests

### Basic Component Test Example

```typescript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { YourComponent } from '@/components/your-component';

describe('YourComponent', () => {
  it('should render component', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', () => {
    render(<YourComponent />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Assert expected behavior
  });
});
```

### Common Testing Patterns

#### Checking DOM Elements

```typescript
// By text
expect(screen.getByText('Hello')).toBeInTheDocument();

// By role
expect(screen.getByRole('button')).toBeInTheDocument();

// By selector
const { container } = render(<Component />);
expect(container.querySelector('section')).toBeInTheDocument();
```

#### Testing Props

```typescript
const { rerender } = render(<Component count={0} />);
expect(screen.getByText('0')).toBeInTheDocument();

rerender(<Component count={5} />);
expect(screen.getByText('5')).toBeInTheDocument();
```

#### Testing User Interactions

```typescript
import { fireEvent } from "@testing-library/react";

const button = screen.getByRole("button");
fireEvent.click(button);
// Assert state change
```

## Best Practices

1. **Test Behavior, Not Implementation** - Focus on what users see, not how it works internally
2. **Use Semantic Queries** - Prefer `getByRole`, `getByText` over `getByTestId`
3. **Clear Test Names** - Describe what the test validates
4. **Arrange-Act-Assert** - Organize tests with setup, action, then assertions
5. **Mock External Dependencies** - Use Jest mocks for API calls, Clerk auth, database
6. **Keep Tests Focused** - One assertion per test when possible
7. **Use BeforeEach** - Setup common test state to avoid repetition

## Coverage Goals

- **Components**: 80%+ coverage
- **Utilities**: 90%+ coverage
- **API Routes**: 100% coverage for critical paths
- **Business Logic**: 100% coverage

## Debugging Tests

### Run Single Test File

```bash
npm test -- calculator.test.tsx
```

### Run Tests Matching Pattern

```bash
npm test -- --testNamePattern="Button"
```

### Debug Mode

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

## Integration Tests

For full integration testing with database and authentication:

1. Set up test database (separate from development)
2. Use `@testing-library/react` with mocked API responses
3. Consider E2E tests with Playwright or Cypress for full workflows

## Continuous Integration

Tests run automatically on:

- Pre-commit (can be configured with husky)
- Pull requests (GitHub Actions)
- Before production builds

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Troubleshooting

### Tests Failing with Module Not Found

- Ensure path aliases in `tsconfig.json` match `jest.config.js`
- Check file extensions in imports

### Timeout Errors

- Increase timeout: `jest.setTimeout(10000)`
- Check for infinite loops or unmocked promises

### DOM Element Not Found

- Use `screen.debug()` to see rendered output
- Verify element is rendered before querying
- Check for conditional rendering

## Current Test Results

```
Test Suites: 6 passed, 6 total
Tests:       29 passed, 29 total
Snapshots:   0 total
Time:        0.635 s
```

All tests are passing and ready for development!
