module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["react"],
    rules: {
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/destructuring-assignment": ["error", "always", {
            ignoreClassFields: true
        }]
    }
};
