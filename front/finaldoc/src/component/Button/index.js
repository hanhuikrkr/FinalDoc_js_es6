import React from 'react'

import classnames from 'classnames'
import './index.scss'

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | error | default | pureWhite
 * @param {shape} string 按钮形状 circle | radius(默认)
 * @param {width} string 按钮宽度 | 默认 10em
 */
export default function Button(props) {
  let { children, onClick, className, type="primary", shape, block,width } = props
  return <button className={classnames('g-Button', 'ripple', type, shape, block ? 'block' : '', className)} onClick={onClick} style={{width}}>
    { children }
  </button>
}