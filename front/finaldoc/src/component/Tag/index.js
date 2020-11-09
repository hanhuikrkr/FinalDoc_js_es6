"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tag;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style/css.css");

/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */
function Tag(props) {
  var children = props.children,
      closable = props.closable,
      onClose = props.onClose,
      color = props.color;

  var tag = _react.default.createRef();

  var handleClose = function handleClose() {
    onClose && onClose();
    tag.current.style.display = 'none';
  };

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('xTag', color ? 'xTagHasColor' : ''),
    style: {
      backgroundColor: color
    },
    ref: tag
  }, children, closable && _react.default.createElement("span", {
    className: "closeBtn",
    onClick: handleClose
  }, "x"));
}