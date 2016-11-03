/**
 * RenRenChe JavaScript style guide
 */

module.exports = {
  extends: 'airbnb-base',
  globals: {
    RRC: true,
    _gaq: true,
    _hmt: true,
    _rls: true,
    _fxcmd: true,
    requirejs: true,
    casper: true,
    patchRequire: true,
    md5: true,
    FastClick: true,
    phantom: true,
    sinon: true,
    __DEVELOPMENT__: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: true,
    mocha: true,
    jasmine: true,
    jquery: true,
  },
  rules: {
    indent: ['error', 4, { SwitchCase: 1 }], // 缩进
    'max-len': ['error', { code: 240, tabWidth: 4, ignoreUrls: true, ignoreComments: false }],
    camelcase: 'off', // 不强制使用 camel case 命名
    'consistent-return': 'off', // 不强制 return
    'global-require': 'off', // 不强制全局 require
    'newline-per-chained-call': 'off', // 不强制链接操作另起一行
    'no-underscore-dangle': 'off', // 不禁止使用下划线作为变量名前缀
    'comma-dangle': 'off', // 不强制尾逗号
    'no-console': 'off', // 不禁用 console
    'prefer-arrow-callback': 'off', // 不强制使用箭头函数
    'import/no-amd': 'off', // 不禁用 amd
    'func-names': 'off', // 不强制函数表达式有函数名
    'guard-for-in': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'], // 不禁止 for in 循环
    'arrow-parens': 'off',
    'padded-blocks': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'no-danger-with-children': 'off',
    'padded-blocks': 'off',
    'class-methods-use-this': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  }
}
