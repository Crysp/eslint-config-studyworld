module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    globals: {
        process: true,
    },
    extends: "airbnb",
    rules: {
        indent: ["error", 4, {
            SwitchCase: 1
        }],
        "no-underscore-dangle": [
            2,
            {
                allow: [
                    "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__",
                    "__APOLLO_STATE__",
                    "__PRELOADED_STATE__",
                    "__typename"
                ]
            }
        ],
        "max-len": [
            "error",
            100,
            4,
            {
                ignoreRegExpLiterals: true,
                ignoreComments: true,
                ignoreUrls: true,
                ignorePattern: "^\\s*<(?:path|rect|g|polygon|polyline|ellipse|linearGradient|text|use|image|circle|filter|feGaussianBlur|feColorMatrix) .*?>"
            }
        ],
        "no-console": ["error", {
            allow: ["error"]
        }],
        "linebreak-style": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0
    }
};
