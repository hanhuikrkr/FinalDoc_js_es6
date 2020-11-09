import BaseActions from "../util/baseAction";
import { observable, action, runInAction, toJS } from "mobx";
import * as urls from "../constant/urls";
import { message } from "antd";

class Topic extends BaseActions {
  @observable NavStage = -2;

  @action
  async getNavStage(params) {
    const r = await this.post(urls.API_SYS_GET_NAV_STAGE, params);
   
    if (r) {
      runInAction(() => {
        console.log("topic getNavStage=========",  r.data[0][0].navState);
        this.NavStage = r.data[0][0].navState;
      });
      return this.navState;
    }
  }
}

export default new Topic();
