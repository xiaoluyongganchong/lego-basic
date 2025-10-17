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
        indent: [2, 4, { SwitchCase: 1 }],
        "no-console": "off",
        "no-debugger": "off",
        "vue/multi-word-component-names": 0,
<<<<<<< HEAD
        // 解决let被强转为const问题
        "prefer-const": 0,
        // 保存代码时缩进4个空格
    // indent: ["error", 4],
         '@typescript-eslint/no-explicit-any': 'off' // 关闭显式使用 any 的规则
    },
  }
=======
        "prefer-const": 0,
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-implicit-any": "off",
        "vue/no-explicit-any": "off"
    }
}
>>>>>>> init-test
