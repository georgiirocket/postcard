module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    serviceworker: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
  ignorePatterns: ['/*.*', 'src/@types'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    files: ['*.ts', '*.tsx'],
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/ignore': ['*.css']
  },
  rules: {
    'unicorn/import-index': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external', 'parent', 'internal', 'sibling', 'index', 'unknown']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
