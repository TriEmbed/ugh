const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended'],
  globals: {
    'window': true,
    'qq': true,
  },
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'no-unused-vars': isProd ? 'error' : 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'error',
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'expression'],
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
