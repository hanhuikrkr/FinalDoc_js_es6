import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import "./index.scss";
import React from "react";
import classnames from "classnames";
import elseIcon from "./else.svg";
/**
 * Card 卡片组件
 * @param {headStyle} object 更改Card头部样式
 * @param {contentStyle} object 更改Card内容区样式
 * @param {style} object 更改Card容器样式
 * @param {title} string|ReactNode Card标题
 * @param {action} array Card功能区内容
 * @param {className} string 自定义类名
 */

function Card(props) {
  const {
    children,
    action = [],
    headStyle,
    contentStyle,
    style,
    title,
    className,
  } = props;
  console.log(action);
  return (
    <div className={classnames("xCardWrap", className)} style={style}>
      <div className={classnames("xCardHeader")} style={headStyle}>
        <div className="xCardHeaderTit">{title}</div>
        {!!action.length && (
          <div className="xAction">
            <img
              src={elseIcon}
              style={{
                height: "15px",
                width: "15px",
                color: "rgba(0,0,0,.5)",
                cursor: "pointer",
              }}
            ></img>
            <div className="xActionChildren">
              <div className="xActionChildrenBox">
                {action.map((item, i) => {
                  return (
                    <div key={i + item} className="xActionItem">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="xCardContent" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

//   return _react.default.createElement("div", {
//     className: (0, _classnames.default)('xCardWrap', className),
//     style: style
//   }, _react.default.createElement("div", {
//     className: "xCardHeader",
//     style: headStyle
//   }, _react.default.createElement("div", {
//     className: "xCardHeaderTit"
//   }, title),
//   !!action.length && _react.default.createElement("div", {
//     className: "xAction"
//   }, _react.default.createElement(_Icon.default, {
//     type: "FaEllipsisH",
//     style: {
//       fontSize: '10px',
//       color: 'rgba(0,0,0,.5)',
//       cursor: 'pointer'
//     }
//   }), _react.default.createElement("div", {
//     className: "xActionChildren"
//   }, _react.default.createElement("div", {
//     className: "xActionChildrenBox"
//   }, action.map(function (item, i) {
//     return _react.default.createElement("div", {
//       key: i,
//       className: "xActionItem"
//     }, item);
//   }))))), _react.default.createElement("div", {
//     className: "xCardContent",
//     style: contentStyle
//   }, children));
// }

Card.propTypes = {
  style: PropTypes.object,
  headStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  action: PropTypes.array,
};

export default Card;
