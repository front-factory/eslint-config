import stylistic from '@stylistic/eslint-plugin';

export default [{
    plugins: {
        '@stylistic': stylistic
    },
    rules: {
        'curly': [
            'error'
        ],
        '@stylistic/array-bracket-newline': [
            'error',
            'consistent'
        ],
        '@stylistic/array-bracket-spacing': [
            'error',
            'never'
        ],
        '@stylistic/array-element-newline': [
            'error',
            'always'
        ],
        '@stylistic/brace-style': [
            'error'
        ],
        '@stylistic/comma-spacing': [
            'error'
        ],
        '@stylistic/indent': [
            'error',
            4
        ],
        '@stylistic/object-curly-newline': [
            'error',
            {
                'minProperties': 1,
                'multiline': true
            }
        ],
        '@stylistic/object-property-newline': [
            'error'
        ],
        '@stylistic/quotes': [
            'error',
            'single'
        ],
        '@stylistic/semi': [
            'error',
            'always'
        ]
    }
}];
