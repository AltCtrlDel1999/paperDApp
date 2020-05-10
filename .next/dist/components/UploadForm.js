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

var _fileinstance = require('../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _semanticUiReact = require('semantic-ui-react');

var _ipfs = require('../ipfs/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/shubham/Desktop/paperDApp/components/UploadForm.js';


var UploadForm = function (_Component) {
  (0, _inherits3.default)(UploadForm, _Component);

  function UploadForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UploadForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UploadForm.__proto__ || (0, _getPrototypeOf2.default)(UploadForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      file: null,
      loading: false,
      errorMessage: '',
      fileBuffer: null,
      fileHash: ''
    }, _this.onChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var file, reader;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = event.target.files[0];

                _this.setState({ file: file });
                reader = new window.FileReader();

                reader.readAsArrayBuffer(file);
                reader.onloadend = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                  var fileBuffer;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Buffer.from(reader.result);

                        case 2:
                          fileBuffer = _context.sent;

                          console.log(fileBuffer);
                          _this.setState({ fileBuffer: fileBuffer });

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                }));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onAdd = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                //this.setState({loadinga:true});
                _context3.next = 3;
                return _ipfs2.default.add(_this.state.fileBuffer, function (err, hashID) {
                  console.log(hashID);
                  _this.setState({ fileHash: hashID[0].hash });
                  console.log(_this.state.fileHash);
                });

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.onSubmit = function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        var fileInstance, accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();
                /*await ipfs.add(this.state.fileBuffer, (err, hashID) => {
                  console.log(hashID);
                  this.setState({ fileHash:hashID[0].hash });
                  console.log(this.state.fileHash);
                });*/
                fileInstance = (0, _fileinstance2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                _context4.prev = 3;
                _context4.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context4.sent;
                _context4.next = 9;
                return fileInstance.methods.addNewVersion(_this.state.fileHash).send({
                  from: accounts[0]
                });

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4['catch'](3);

                _this.setState({ errorMessage: _context4.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[3, 11]]);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UploadForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Upload updated file'), _react2.default.createElement(_semanticUiReact.Input, {
        type: 'file',
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onAdd, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Upload')), _react2.default.createElement(_semanticUiReact.Message, { error: true, heading: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Update'));
    }
  }]);

  return UploadForm;
}(_react.Component);

exports.default = UploadForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXBsb2FkRm9ybS5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIkZpbGVJbnN0YW5jZSIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJpcGZzIiwid2ViMyIsIlVwbG9hZEZvcm0iLCJzdGF0ZSIsImZpbGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZmlsZUJ1ZmZlciIsImZpbGVIYXNoIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwic2V0U3RhdGUiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJCdWZmZXIiLCJmcm9tIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm9uQWRkIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlcnIiLCJoYXNoSUQiLCJoYXNoIiwib25TdWJtaXQiLCJmaWxlSW5zdGFuY2UiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFkZE5ld1ZlcnNpb24iLCJzZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBUSxBQUFLLEFBQU0sQUFBUTs7QUFDM0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFHWDs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7WUFBTSxBQUNHLEFBQ1A7ZUFGSSxBQUVNLEFBQ1Y7b0JBSEksQUFHVyxBQUNmO2tCQUpJLEFBSVMsQUFDYjtnQixBQUxJLEFBS087QUFMUCxBQUNKLGEsQUFPRjsyRkFBVyxrQkFBQSxBQUFPLE9BQVA7a0JBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ0g7QUFERyx1QkFDSSxNQUFBLEFBQU0sT0FBTixBQUFh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