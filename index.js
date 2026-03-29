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
        '@stylistic/comma-dangle': [
            'error', {
                'functions': 'never'
            }
        ],
        '@stylistic/comma-spacing': [
            'error'
        ],
        '@stylistic/indent': [
            'error',
            4
        ],
        '@stylistic/object-curly-newline': [
            'error', {
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 1
                },
                'ObjectPattern': {
                    'multiline': true
                },
                'ImportDeclaration': {
                    'multiline': true,
                    'minProperties': 3
                },
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 3
                }
            }
        ],
        '@stylistic/object-curly-spacing': [
            'error',
            'always', {
                'arraysInObjects': true,
                'objectsInObjects': true
            }
        ],
        '@stylistic/object-property-newline': [
            'error'
        ],
        '@stylistic/padding-line-between-statements': [
            'error', {
                blankLine: 'always',
                prev: 'block-like',
                next: '*'
            },
            {
                blankLine: 'always',
                prev: 'multiline-expression',
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
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
