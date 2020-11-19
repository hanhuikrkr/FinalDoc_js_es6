import React from "react";
import RcSwitch from "rc-switch";
import { useState } from "react";
import classnames from "classnames";
import "./index.scss";

/**
 * switch 本着简洁的设计态度，本select不支持框内任何的图标，文字
 * @param {color} String 组件selected的颜色，默认ios7的颜色
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} int 组件的尺寸 默认2em高 4em宽
 */
export default function Switch(props) {
  let {
    color = "#86d993",
    className,
    checked,
    disabled,
   
    
    onChange,
    size=3,
  } = props;
  let handleChange = (e) => {
    console.log("option Selected!");
    console.log("handleChange -> e", e.target.checked);
    e.persist();
    onChange && onChange(e.target.checked);
  };

  return (
    <div className={classnames(className)}>
      <input className="g-simpleswitch g-simpleswitch-ios" id="cb2" type="checkbox" checked={checked} onChange={handleChange}></input>
      <label className="g-simpleswitch-btn" htmlFor="cb2" style={{width:2*size+"em",height:size+"em"}}></label>
    </div>
  );
}
