module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/camelcase": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off",
    "react/destructuring-assignment": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/first": "off",
    "import/order": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/ban-types": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/no-unused-prop-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
