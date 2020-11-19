import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import classnames from 'classnames'
/**
 * @description: Tooltip文字提示，非常不建议使用，
 * @param {overlay} String 提示文字
 * @param {trigger} String[] 	触发行为，可选 hover | focus | click | contextMenu，可使用数组设置多个触发行为,默认：['hover']
 * @param {mouseEnterDelay} int 鼠标移入后延时多少才显示 Tooltip，单位：秒
 * @param {mouseLeaveDelay} int 鼠标移出后延时多少才隐藏 Tooltip，单位：秒
 * @param {onVisibleChange} Function 显示状态改变后的回调函数
 * @param {visible} boolean 是否显示提示
 * @param {align} 	Object: alignConfig of [dom-align] //https://github.com/yiminghe/dom-align
 * @param {placement} 	String: 气泡框位置，可选  ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
 * @param {overlayInnerStyle} 	String: 气泡样式
 * @param {color} 	String: 气泡颜色

 */
export default function ReTooltip(props) {
  let {
    children,
    overlay,
    trigger = ["hover"],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,

    align,
    placement = "topRight",
    onVisibleChange,
    overlayInnerStyle,
    
  } = props;

  return (
    <div>
      <Tooltip
      
        placement={placement}
        mouseEnterDelay={mouseEnterDelay}
        mouseLeaveDelay={mouseLeaveDelay}
        trigger={trigger}
        onVisibleChange={onVisibleChange}
        overlay={
          <div style={{ ...overlayInnerStyle}}>
            {overlay}
          </div>
        }
       

        align={align}
        animation="zoom"
      >
        {children}
      </Tooltip>
    </div>
  );
}
