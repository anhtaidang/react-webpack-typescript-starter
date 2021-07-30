module.exports = {
  extends: [
    "prettier",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["@typescript-eslint", "react-hooks", "react"],
  settings: {
    react: {
      pragma: "React",
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      "babel-module": {
        alias: {
          "~": "./shopee/src",
        },
      },
    },
  },
  // Fine tune rules
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    "react/prop-types": 0,
    "react/prefer-stateless-function": "off",
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "max-len": ["error", { code: 120 }],
    "import/prefer-default-export": "off",
    "import/export": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
