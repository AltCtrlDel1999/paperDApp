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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _fileinstance = require('../../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _semanticUiReact = require('semantic-ui-react');

var _UploadForm = require('../../components/UploadForm');

var _UploadForm2 = _interopRequireDefault(_UploadForm);

var _fileSaver = require('file-saver');

var _ipfs = require('../../ipfs/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shubham/Desktop/paperDApp/pages/documents/show.js?entry';


var DocumentShow = function (_Component) {
  (0, _inherits3.default)(DocumentShow, _Component);

  function DocumentShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DocumentShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DocumentShow.__proto__ || (0, _getPrototypeOf2.default)(DocumentShow)).call.apply(_ref, [this].concat(args))), _this), _this.onDownload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var fileBuf, blob;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              /*const chunks = [];
              for await (const chunk of ipfs.cat(ipfsHash)) {
                chunks.push(chunk)
              }
              console.log(Buffer.concat(chunks).toString())*/
              _context.next = 3;
              return _ipfs2.default.cat(_this.props.fileHash);

            case 3:
              fileBuf = _context.sent;

              console.log(fileBuf);
              blob = new Blob([fileBuf]);

              console.log(blob);
              try {
                (0, _fileSaver.saveAs)(blob, _this.props.fileName);
              } catch (e) {
                console.log(e);
              }

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DocumentShow, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Document Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal, { animated: 'move right', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        header: this.props.fileName,
        meta: this.props.fileOwner,
        description: this.props.fileHash,
        style: { overflowWrap: 'break-word' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Reveal.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginTop: '50px', marginLeft: '80px' }, primary: true, href: this.props.fileURL, Download: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'View File'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_UploadForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '50px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginRight: '10px' }, primary: true, onClick: this.onDownload, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Download File'), _react2.default.createElement(_routes.Link, { route: '/documents/' + this.props.address + '/versions', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Track Update History')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var fileInstance, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileInstance = (0, _fileinstance2.default)(props.query.address);
                _context2.next = 3;
                return fileInstance.methods.getSummary().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt('return', {
                  address: props.query.address,
                  fileName: summary[0],
                  fileHash: summary[1],
                  fileURL: "https://ipfs.infura.io/ipfs/" + summary[1],
                  fileOwner: summary[2]
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DocumentShow;
}(_react.Component);

exports.default = DocumentShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RvY3VtZW50cy9zaG93LmpzIl0sIm5hbWVzIjpbInJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRmlsZUluc3RhbmNlIiwiQ2FyZCIsIlJldmVhbCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkdyaWQiLCJVcGxvYWRGb3JtIiwic2F2ZUFzIiwiaXBmcyIsIkxpbmsiLCJEb2N1bWVudFNob3ciLCJvbkRvd25sb2FkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhdCIsInByb3BzIiwiZmlsZUhhc2giLCJmaWxlQnVmIiwiY29uc29sZSIsImxvZyIsImJsb2IiLCJCbG9iIiwiZmlsZU5hbWUiLCJlIiwiZmlsZU93bmVyIiwib3ZlcmZsb3dXcmFwIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImZpbGVVUkwiLCJhZGRyZXNzIiwibWFyZ2luUmlnaHQiLCJmaWxlSW5zdGFuY2UiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFRLEFBQU0sQUFBTyxBQUFPLEFBQVc7O0FBQ3ZDLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBZUosc0ZBQWEsbUJBQUE7bUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1g7b0JBQUEsQUFBTSxBQUNOO0FBRlc7Ozs7OzhCQUFBO3FCQU9XLGVBQUEsQUFBSyxJQUFJLE1BQUEsQUFBSyxNQVB6QixBQU9XLEFBQW9COztpQkFBcEM7QUFQSyxpQ0FRWDs7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBQVRLLHFCQVNFLElBQUEsQUFBSSxLQUFLLENBVFgs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