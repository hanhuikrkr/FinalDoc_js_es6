import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { computed, toJS } from "mobx";
import { NavLink } from "react-router-dom";
import "./style.scss";
@inject("userStore", "studentStore","topicStore")
class NavFoot extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "error" };
  }
  @computed
  get usr() {
    return this.props.userStore.usr;
  }
  logout = () => {
    this.props.userStore.logout();
    this.props.studentStore.initStuStore();
  };
  componentDidMount() {
    let rolename = "";
    switch (parseInt(this.usr.role)) {
      case 1:
        rolename = "学生";
        break;
      case 0:
        rolename = "教师";
        break;
      case 2:
        rolename = "系主任";
        break;
      case 3:
        rolename = "教务处";
        break;
      default:
        break;
    }
    this.setState({
      role: rolename,
    });
  }
  render() {
    const { role } = this.state;
    return (
      <div className="g-nav-foot">
        <div className="g-info">
          <div className="m-info">
            <NavLink to="\login">
              <div className="m-logout" onClick={this.logout}>
                <span>退出登录</span>
              </div>
            </NavLink>

            <div className="g-info-typeline">
              <div>{role}</div>
            </div>

            <div className="g-info-name">
              <span className="z-info-id">{this.usr.uid}</span>
              <span className="z-info-name">{this.usr.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavFoot;
