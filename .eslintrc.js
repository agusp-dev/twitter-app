const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': RULES.OFF
  }
}
