"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style/css.css");

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} string 组件的尺寸
 */
function Switch(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? '#09f' : _props$color,
      className = props.className,
      checked = props.checked,
      disabled = props.disabled,
      onText = props.onText,
      offText = props.offText,
      onChange = props.onChange,
      size = props.size;

  var handleChange = function handleChange(e) {
    e.persist();
    onChange && onChange(e.target.checked);
  };

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('xSwitch', className)
  }, _react.default.createElement("label", {
    className: (0, _classnames.default)('xSwitchInner', size),
    style: {
      pointerEvents: disabled ? 'none' : 'default',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, _react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: handleChange
  }), _react.default.createElement("span", {
    className: "xSwitchAnimatingNode",
    style: {
      backgroundColor: color
    },
    "data-onText": onText
  }), _react.default.createElement("span", {
    className: "offText"
  }, offText)));
}