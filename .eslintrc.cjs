module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 你可以在这里自定义规则
     indent: [2, 4, { SwitchCase: 1 }],
        "no-console": "off",
        "no-debugger": "off",
        "vue/multi-word-component-names": 0,
        // 解决let被强转为const问题
        "prefer-const": 0
        // 保存代码时缩进4个空格
        // indent: ["error", 4],
    },
  }