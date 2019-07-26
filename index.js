module.exports = {
    extends: [
        './rules/base.js',
        './rules/react.js'
    ].map(require.resolve),
    rules: {}
};
