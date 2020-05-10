'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _file = require('../ethereum/file');

var _file2 = _interopRequireDefault(_file);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shubham/Desktop/paperDApp/pages/index.js?entry';


var PaperIndex = function (_Component) {
  (0, _inherits3.default)(PaperIndex, _Component);

  function PaperIndex() {
    (0, _classCallCheck3.default)(this, PaperIndex);

    return (0, _possibleConstructorReturn3.default)(this, (PaperIndex.__proto__ || (0, _getPrototypeOf2.default)(PaperIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(PaperIndex, [{
    key: 'renderItems',
    value: function renderItems() {
      var items = this.props.files.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/documents/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }, 'View File')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'All Documents'), _react2.default.createElement(_routes.Link, { route: '/documents/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Add Document', icon: 'add circle', floated: 'right', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), this.renderItems()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var files;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _file2.default.methods.getDeployedFiles().call();

              case 2:
                files = _context.sent;
                return _context.abrupt('return', { files: files });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PaperIndex;
}(_react.Component);

exports.default = PaperIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsImZpbGUiLCJMaW5rIiwiUGFwZXJJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJmaWxlcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVySXRlbXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRGaWxlcyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUdiOzs7Ozs7Ozs7OztrQ0FPUyxBQUNYO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksbUJBQVcsQUFDNUM7O2tCQUFNLEFBQ0ksQUFDUjt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKQSxBQUdGLEFBQ0UsQUFFSjtpQkFORixBQUFNLEFBTUcsQUFFVjtBQVJPLEFBQ0o7QUFGSixBQUFjLEFBV2QsT0FYYzs7MkNBV1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHRCxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsZ0JBQWUsTUFBL0IsQUFBb0MsY0FBYSxTQUFqRCxBQUF5RCxTQUFRLFNBQWpFO29CQUFBO3NCQUpKLEFBRUUsQUFDQSxBQUNFLEFBR0Q7QUFIQztpQkFOUixBQUNFLEFBQ0UsQUFPRyxBQUFLLEFBSWI7Ozs7Ozs7Ozs7Ozt1QkFsQ3FCLGVBQUEsQUFBSyxRQUFMLEFBQWEsbUIsQUFBYixBQUFnQzs7bUJBQTlDO0E7aURBRUMsRUFBQyxPLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ1gsQSxBQXZDeUI7O2tCQXVDekIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHViaGFtL0Rlc2t0b3AvcGFwZXJEQXBwIn0=