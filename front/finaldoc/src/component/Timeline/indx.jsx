/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 */

//TODO:

import React from "react";
import styles from "./index.scss";

import PropTypes from "prop-types";
import clone from "../../util/clone";

/**
 *  自定义 带渐变时间轴组件
 */
class TimeLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      style = {},
      lineStyle = {},
      colorOption = [],
      angle = 45,
      breakOption = {},
      topTextStyle = {},
      bottomTextStyle = {},
    } = this.props;
    //line style
    let linearStyle = `linear-gradient(${angle}deg,`;
    let lineStyleClone = clone(lineStyle);
    if (colorOption) {
      colorOption.forEach((item) => {
        linearStyle += `${item.color} ${item.step}%,`;
      });
      lineStyleClone.background = linearStyle.substr(0, linearStyle.length - 1);
    }

    return (
      <div className={styles.timeLineContainer} style={style}>
        <span className={styles.timeLine} style={lineStyleClone}></span>
        {breakOption.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`${styles.point} ${
                  item.active === true ? styles.activePoint : ""
                }`}
                style={{ left: `${item.step ? item.step : 0}%` }}
              ></div>
              {(() => {
                let top = clone(topTextStyle);
                top.left = (item.step ? item.step : 0) + "%";
                return (
                  <div className={styles.topText} style={top}>
                    {item.topText ? item.topText : ""}
                  </div>
                );
              })()}
              {(() => {
                let bottom = clone(bottomTextStyle);
                bottom.left = (item.step ? item.step : 0) + "%";
                return (
                  <div className={styles.bottomText} style={bottom}>
                    {item.bottomText ? item.bottomText : ""}
                  </div>
                );
              })()}
            </div>
          );
        })}
      </div>
    );
  }
}

TimeLine.propTypes = {
  style: PropTypes.object,
  lineStyle: PropTypes.object, //线条样式
  colorOption: PropTypes.array.isRequired, //颜色渐变断点设置
  angle: PropTypes.number, //渐变颜色旋转角
  breakOption: PropTypes.array.isRequired, //断点文本，分上文本，下文本
  topTextStyle: PropTypes.object, //上文本样式
  bottomTextStyle: PropTypes.object, //下文本样式
};

TimeLine.defaultProps = {
  style: {},
  lineStyle: {},
  colorOption: [],
  angle: 45,
  breakOption: [],
  topTextStyle: {},
  bottomTextStyle: {},
};

export default TimeLine;
