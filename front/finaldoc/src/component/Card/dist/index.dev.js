"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react2 = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes2 = _interopRequireDefault(require("prop-types"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Card 卡片组件
 * @param {headStyle} object 更改Card头部样式
 * @param {contentStyle} object 更改Card内容区样式
 * @param {style} object 更改Card容器样式
 * @param {title} string|ReactNode Card标题
 * @param {action} array Card功能区内容
 */
function Card(props) {
  var headStyle = props.headStyle,
      contentStyle = props.contentStyle,
      style = props.style,
      title = props.title,
      className = props.className,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? [] : _props$action;
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('xCardWrap', className),
    style: style
  }, _react["default"].createElement("div", {
    className: "xCardHeader",
    style: headStyle
  }, _react["default"].createElement("div", {
    className: "xCardHeaderTit"
  }, title), !!action.length && _react["default"].createElement("div", {
    className: "xAction"
  }, _react["default"].createElement(_Icon["default"], {
    type: "FaEllipsisH",
    style: {
      fontSize: '10px',
      color: 'rgba(0,0,0,.5)',
      cursor: 'pointer'
    }
  }), _react["default"].createElement("div", {
    className: "xActionChildren"
  }, _react["default"].createElement("div", {
    className: "xActionChildrenBox"
  }, action.map(function (item, i) {
    return _react["default"].createElement("div", {
      key: i,
      className: "xActionItem"
    }, item);
  }))))), _react["default"].createElement("div", {
    className: "xCardContent",
    style: contentStyle
  }, children));
}

Card.propTypes = {
  style: _propTypes["default"].object,
  headStyle: _propTypes["default"].object,
  contentStyle: _propTypes["default"].object,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
  action: _propTypes["default"].array
};
var _default = Card;
exports["default"] = _default;