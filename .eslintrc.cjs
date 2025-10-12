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
        "prefer-const": 0,
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-implicit-any": "off",
        "vue/no-explicit-any": "off"
    }
}
