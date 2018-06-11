'use strict';

var path = require('path');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function (_ref, _ref2) {
  var platform = _ref.platform;
  var module = _ref2.module,
      resolve = _ref2.resolve;
  return {
    entry: './src/index.' + platform + '.tsx',
    module: _extends({}, module, {
      rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }].concat(_toConsumableArray(module.rules))
    }),
    resolve: _extends({}, resolve, {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.' + platform + '.ts', '.native.ts', '.' + platform + '.tsx', '.native.tsx'].concat(_toConsumableArray(resolve.extensions))
    })
  };
};
