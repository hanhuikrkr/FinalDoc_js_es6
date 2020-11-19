import React from "react";
import classnames from "classnames";
import "./tags.scss";
import {colorIndex} from "../../constant/data"

/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则从colorIndex中随机选一个
 */
function Tag(props) {
  const { children, closable, onClose, color=colorIndex[Math.floor((Math.random()*colorIndex.length))] } = props;

  var tag = React.createRef();

  var handleClose = function handleClose() {
    onClose && onClose();
    tag.current.style.display = "none";
  };
  return (
    <div
      className={classnames("g-Tag", color ? "g-TagHasColor" : "")}
      style={{ background: color }}
      ref={tag}
    >
      {children}
      {closable && (
        <span className="closeBtn" onClick={handleClose}>
          X
        </span>
      )}
    </div>
  );
}

export default Tag;
