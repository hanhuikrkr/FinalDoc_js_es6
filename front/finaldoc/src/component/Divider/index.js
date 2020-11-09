import React, { Component } from "react";
import { school_color } from "../../constant/data";
class Divider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      color: school_color,
      lineColor: school_color,
      margin: "10px",
    };
  }

  render() {
    const { lineColor, margin, color } = this.state;
    return (
      <div
        style={{ 
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            borderBottom: `1px solid ${lineColor}`,
          }}
        ></div>
        <div
          style={{
            margin: `0 ${margin}`,
            color: color,
          }}
        >
          {this.props.text}
        </div>
        <div
          style={{
            flexGrow: 1,
            borderBottom: `1px solid ${lineColor}`,
          }}
        ></div>
      </div>
    );
  }
}

export default Divider;
