import React, { Component } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { computed, toJS } from "mobx";
import Divider from "../../../Divider/index";
import {
  MENU_MAIN_S,
  MENU_MAIN_M,
  MENU_MAIN_T,
  MENU_MAIN_T_AUDIT,
} from "../../../../constant/data";
@inject("topicStore", "userStore", "teacherStore")
@observer
class NavMenuBody extends Component {
  constructor(props) {
    super(props);
    this.state = { cur: 0, navMenuComponent: [], DHMenu: [] };
  }

  @computed
  get usr() {
    return this.props.userStore.usr;
  }
  @computed
  get NavStage() {
    return this.props.topicStore.NavStage;
  }
  doMenu = (path, i) => {
    this.setState({ cur: i });
  };
  componentDidMount() {
    switch (parseInt(this.usr.role)) {
      case 1:
        this.setState({
          navMenuComponent: MENU_MAIN_S,
        });
        break;
      case 2:

      /**
       * 注意！ 此处不能break
       * 系主任还要完成作为教师的责任！
       */
      case 0:
        let list = [];
        list.push(...MENU_MAIN_T);
        /**
         * 笔记：
         * 此处有遇到一个问题，注意不能浅拷贝
         */
        /**
         * 查查看这教师是不是审核教师，如果是审核教师就要加一个审核路由
         */
        this.props.teacherStore
          .call_AuditFd_JudgeIfAduit({ uid: this.usr.uid })
          .then((r) => {
            /**
             * //得益于良好的阶段控制，可以保证一个教师在一个阶段不会同时审核两种内容
             */

            if (r.flag) {
              list.push(...MENU_MAIN_T_AUDIT);
            }

            this.setState({
              navMenuComponent: list,
            });
          });

        break;

      default:
        break;
    }
  }
  render() {
    const { cur, navMenuComponent, DHMenu } = this.state;
 

    return (
      <div className="g-nav-menu">
        <div className="g-menu">
          {this.usr.role == 2 && (
            <>
              {MENU_MAIN_M.map(
                (item, i) =>
                  item.state.indexOf(this.NavStage) > -1 && (
                    <NavLink to={item.path} key={i + "MENU_MAIN_M"}>
                      <div
                        className={
                          cur == i ? "m-menu-item active" : "m-menu-item"
                        }
                        key={i + "div"}
                        onClick={this.doMenu.bind(this, item.path, i)}
                      >
                        <img src={item.icon} />
                        <span className="m-menu-span">{item.title}</span>
                      </div>
                    </NavLink>
                  )
              )}
              <Divider text="指导教师" />
            </>
          )}

          {navMenuComponent.map(
            (item, i) =>
              item.state.indexOf(this.NavStage) > -1 && (
                <NavLink to={item.path} key={i + "navMenuComponent"}>
                  <div
                    className={cur == i ? "m-menu-item active" : "m-menu-item"}
                    key={i + "div"}
                    onClick={this.doMenu.bind(this, item.path, i)}
                  >
                    <img src={item.icon} />
                    <span className="m-menu-span">{item.title}</span>
                  </div>
                </NavLink>
              )
          )}
        </div>
      </div>
    );
  }
}
export default NavMenuBody;
