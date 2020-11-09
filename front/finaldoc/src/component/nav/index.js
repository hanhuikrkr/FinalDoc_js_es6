
import NavModule from "./navModels";

import { inject } from "mobx-react";
import { computed } from "mobx";
import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./style.scss"
@inject("userStore","topicStore")
class Nav extends Component {
  @computed
  get usr() {
    return this.props.userStore.usr;
  }
  componentDidMount() {
    this.props.topicStore.getNavStage({ uid: this.usr.uid }).then((r) => {
      console.log("navhead",r)
      this.setState({
        currId: r,
      });
    });
  }
  render() {
    console.log("nav",this.usr.role)
    if (!this.usr.role) {
			return <Redirect to='/login'/>
		}
    return (
      <div className="g-master-nav">
 
       
        {this.usr.role!==3 && <NavModule />}
      
      </div>
    );
  }
}
export default Nav;
