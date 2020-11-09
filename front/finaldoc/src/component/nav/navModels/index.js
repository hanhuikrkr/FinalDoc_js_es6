import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import NavMenuBody from "../navComponent/navLink/index";
import NavFoot from "../navComponent/navfoot/index";
import Navhead from "../navComponent/navhead";

import "./index.scss";

@inject("userStore", "studentStore")
@observer
class NavModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="g-moudel-nav">
        <Navhead />
        <NavMenuBody />
        <NavFoot />
      </div>
    );
  }
}

export default NavModule;
