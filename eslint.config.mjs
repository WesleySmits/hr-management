import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const baseTsConfig = {
  files: ['src/**/*.ts', 'tests/**/*.ts', 'playwright.config.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json'
    }
  },
  plugins: {
    '@typescript-eslint': tseslint
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error'
  }
};

export default [
  js.configs.recommended,
  baseTsConfig,
  {
    files: ['src/domain/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['../app/*', '../infra/*', '../ui/*', '../api/*']
      }]
    }
  },
  {
    files: ['src/app/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['../infra/*', '../ui/*', '../api/*']
      }]
    }
  },
  {
    files: ['src/infra/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['../app/*', '../ui/*', '../api/*']
      }]
    }
  },
  {
    files: ['src/ui/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['../infra/*', '../api/*']
      }]
    }
  },
  {
    files: ['src/api/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['../ui/*', '../infra/*']
      }]
    }
  },
  {
    ignores: ['node_modules', 'coverage', 'playwright-report', 'test-results']
  }
];
