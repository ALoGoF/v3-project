/*
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-08 11:06:31
 * @FilePath: /v3-project/.eslintrc.cjs
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
