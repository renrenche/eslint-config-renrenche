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
    // 缩进
    indent: ['error', 4, { SwitchCase: 1 }],

    // 代码长度
    'max-len': ['error', {
      code: 240,
      tabWidth: 4,
      ignoreUrls: true,
      ignoreComments: false,
    }],

    // 不强制使用 camel case 命名
    camelcase: 'off',

    // 不强制 return
    'consistent-return': 'off',

    // 不强制全局 require
    'global-require': 'off',

    // 不强制链接操作另起一行
    'newline-per-chained-call': 'off',

    // 不强制尾逗号
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',

    // 不禁用 console
    'no-console': 'off',

    // 不禁用 console
    'prefer-arrow-callback': 'off',

    // 不禁用 amd
    'import/no-amd': 'off',

    // 不强制函数表达式有函数名
    'func-names': 'off',

    // for in 不强制检查 hasOwnProperty
    'guard-for-in': 'off',

    // 不禁止函数参数重新赋值
    'no-param-reassign': 'off',

    // 不禁止 for in 循环
    'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],

    // 不禁止 ++ 操作符
    'no-plusplus': 'off',

    // 不强制 class 方法使用 this
    'class-methods-use-this': 'off',

    // 不禁止 require 变量
    'import/no-dynamic-require': 'off',

    // 不禁止 require devDependencies 中的包
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],

    // 不强制 export default（只 export 一次）
    'import/prefer-default-export': 'off',

    // 不强制 import resolve
    'import/no-unresolved': 'off',
  },
};
