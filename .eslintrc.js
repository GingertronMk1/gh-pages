module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/base",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off",
  },
};
