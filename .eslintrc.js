module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent':[
      'error',
      2
    ],
    'quotes':[
      'error',
      'single'
    ],
    'semi':[
      'error',
      'never'
    ],
    'eqeqeq':'error',
    'object-curly-spacing':['error','always'],
    'arrow-spacing':[ 'error', { 'before':true,'after':true }],
    'no-console':0

  }
}
