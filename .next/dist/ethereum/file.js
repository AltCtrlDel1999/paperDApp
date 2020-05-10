'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create a instance of a deployed contract by providing contracts ABI and deployed contracts address
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xaBCFDcd43EEd8B511Eddb1906204039a0fEcA791');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZpbGUuanMiXSwibmFtZXMiOlsid2ViMyIsImNvbXBpbGVkRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBQ0E7QUFDQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHViaGFtL0Rlc2t0b3AvcGFwZXJEQXBwIn0=