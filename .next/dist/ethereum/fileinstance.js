'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _File = require('./build/File');

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_File2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZpbGVpbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIndlYjMiLCJjb21waWxlZEZpbGVJbnN0YW5jZSIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlDLEFBQWpDLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBWSxBQUN6QjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxlQUFxQixBQUFoQyxBQUF0QixZQUFpRSxBQUFqRSxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJmaWxlaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2h1YmhhbS9EZXNrdG9wL3BhcGVyREFwcCJ9