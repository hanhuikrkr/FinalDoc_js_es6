import React, { Component } from "react";
import "./head.scss";
import { inject, observer } from "mobx-react";
import { computed, toJS } from "mobx";
import logo from "../../../../static/logo.svg";
import { state_diff } from "../../../../constant/data";
@inject("topicStore", "userStore")
@observer
class NavHead extends Component {
  constructor(props) {
    super(props);
    this.state = { currId: -2 };
  }

  @computed
  get usr() {
    return this.props.userStore.usr;
  }

  @computed
  get NavStage(){
    return this.props.topicStore.NavStage;
  }
  componentDidMount() {
    
  }
  render() {
    const {currId } = this.state;
    return (
      <div className="g-head-nav">
        <div className="g-logo">
          <div>
            <img className="u-logo" src={logo} />
          </div>
          <div className="u-title">毕业设计管理系统</div>
        </div>
        <div className="g-st">
          {state_diff.map((item, id) => (
            
              item.number >= this.NavStage - 1 && item.number <= this.NavStage + 2 && (
                <span key={id+"span"}
                  className={item.number === this.NavStage ? "m-st active" : "m-st"}
                >
                  {item.title}
                </span>
              )
            
          ))}
        </div>
      </div>
    );
  }
}
export default NavHead;
