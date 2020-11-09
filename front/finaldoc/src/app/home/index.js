import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";

import Message from "../../component/Message";
import Announcement from "../../component/Announcement";
import "./style.scss";

@inject("manageStore", "userStore")
@observer
class Home extends Component {
  @computed
  get usr() {
    return this.props.userStore.usr;
  }

  componentDidMount() {}

  render() {
    
    return (
      <>
        <div className="g-m-cnt">
          <div className="g-m-title">公告栏</div>
          <div className="g-m m-m">
            <Message />
            <Announcement pageSize={12} height={550} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
