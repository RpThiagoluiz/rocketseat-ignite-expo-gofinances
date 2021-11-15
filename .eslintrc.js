module.exports = {
  env: {
    node: true,
    // es2021: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // radix: 'off',
    //'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
      },
    ],
    // 'import/prefer-default-export': 'off',
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/prop-types': 'off',
    // 'no-param-reassign': 'off',
    // 'no-console': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-underscore-dangle': 'off',
    // camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
