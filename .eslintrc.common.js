
const namingRules = {
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // * https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
  '@typescript-eslint/naming-convention': [
    // * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    'warn',
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'snake_case'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'function',
      format: ['PascalCase', 'camelCase']
    },
    {
      selector: 'variable',
      types: ['function'],
      format: ['PascalCase', 'camelCase']
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
    {
      selector: 'memberLike',
      format: null,
    },
  ]
}

const commonRules = {
  ...namingRules,
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  'react/display-name': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  'prefer-const': 'warn',
  'react/prop-types': 'off',
  '@typescript-eslint/camelcase': 'off',
  'no-empty': ['warn', {allowEmptyCatch: true}],
  'no-eval': 'error',
  'no-alert': 'error',
  'no-debugger': 'warn',
  'no-console': ['warn', {allow: ['error']}],
  'no-labels': 'error',
  'no-shadow': ['error', {builtinGlobals: false, hoist: 'functions', allow: []}],
  'no-constant-condition': 'warn',
  'no-unreachable': 'warn',
  'default-case': 'warn',
  'default-case-last': 'warn',
  'eqeqeq': ['error', 'always', {null: 'ignore'}],
  '@typescript-eslint/array-type': ['warn', {default: 'array', readonly: 'array'}],
}

module.exports = commonRules;
