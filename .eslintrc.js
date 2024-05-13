const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["vinta/recommended-typescript"],
  rules: {
    "default-param-last": "off", // due to initialState in Redux
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "node_modules")],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      webpack: {
        config: path.join(__dirname, "/webpack.config.js"),
        "config-index": 1,
      },
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
    react: {
      version: "detect",
    },
  },
};
