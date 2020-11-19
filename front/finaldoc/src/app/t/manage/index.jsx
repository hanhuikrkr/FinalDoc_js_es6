import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import PublishBlock from "./component/Publish/index";

import Button from "../../../component/Button";
import Drawer from "../../../component/DrawerBox";
import Card from "../../../component/Card/index";
import Modal from "../../../component/Modal";
import reNotification from "../../../component/Notification";
import Tag from "../../../component/Tag";
import Switch from "../../../component/Switch";
import Upload from "../../../component/Upload";
import ReTooltip from "../../../component/Tooltip";
import FileUpload from "../../../component/FileUpload";
import FileDownload from "../../../component/FileDownload";
import "./style.scss";

//将收到的topic数据映射为可以展示的列表
const filter = (t) => {
  t = {
    id: t.id,
    name: t.topic,
    status: t.pass == 2 ? 100 : t.pass,
    sid: t.sid,
  };
  return t;
};
//按照通过状态排序topic列表
const sorter = (x, y) => {
  let y1 = y.status;
  if (y1 == 3) y1 = 10;
  let x1 = x.status;
  if (x1 == 3) x1 = 10;
  return y1 - x1;
};

@inject("userStore")
@observer
class teacherTopicManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //发布课题抽屉可见性
      visible: false,
      //抽屉位置
      placement: "right",
      //当前选中的课题id
      tid: null,
      //课题列表
      toplist: [],
      //审核列表
      checkList: [],
      //发布课题的抽屉是否修改过
      pbChanged: false,
      judgeTopic: true,
      //默认是checkblock1，如果有双选成功的则变成2
      checkBlockState: 0,
      modelVisiable: false,
    };
  }

  /**
   * 显示右侧抽屉，并根据ID自动赋值
   * @param {int} id 课题ID
   */
  onSuccess = () => {
    reNotification.pop({
      duration: 5,

      message: "文件上传成功",
      description: "onSuccessonSuccessonSuccessonSuccess",
    });
  };
  onError = () => {
    reNotification.pop({
      duration: 5,

      message: "文件上传错误",
      description: "onErroronErroronErroronErroronError",
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  closeDrawer = () => {
    this.setState({
      visible: false,
    });
  };
  showModel = () => {
    this.setState({
      modelVisiable: true,
    });
  };
  closeModel = () => {
    this.setState({
      modelVisiable: false,
    });
  };

  showreNotification = (type) => {
    reNotification.pop({
      duration: 5,
      type: type,
      message: type,
      description: `${type} ${type} ${type}`,
    });
  };
  /**
   * 关闭右侧抽屉，并刷新课题列表
   */

  // FIXME HERE IS EMPTY!
  render() {
    const { visible, modelVisiable } = this.state;
    return (
      <div className="t-manage-home">
        <h1>此页面暂时用于摆放各组件的ui使用实例</h1>
        <h2>已完成</h2>

        <div style={{ width: "10vh", height: "10vh" }}>
          <Button onClick={this.showDrawer} type="pureWhite">
            按钮组件
          </Button>
        </div>

        <Drawer
          visible={visible}
          onClose={this.closeDrawer}
          destroyOnClose={true}
        >
          <h1>课题发布</h1>
          <div>抽屉组件</div>
          <PublishBlock />
        </Drawer>
        <div>
          <Card
            title="demo"
            style={{ width: "360px" }}
            action={[<div>foo1</div>, <div>foo2</div>]}
          >
            <p>卡片组件</p>
            <p>卡片组件</p>
            <p>卡片组件</p>
          </Card>
        </div>

        <div style={{ width: "10vh", height: "10vh" }}>
          <Button onClick={this.showModel}>显示模态框</Button>
        </div>
        <Modal
          title="模态框组件"
          visible={modelVisiable}
          onCancel={this.closeModel}
          onOk={this.closeModel}
        >
          <p>模态框组件</p>
          <p>模态框组件</p>
          <p>模态框组件</p>
          <p>模态框组件</p>
          <p>模态框组件</p>
        </Modal>
        <Button
          type="warning"
          width="30vh"
          onClick={() => this.showreNotification("warning")}
        >
          warining Notification
        </Button>
        <br></br>
        <Button
          type="pureWhite"
          width="30vh"
          onClick={() => this.showreNotification("info")}
        >
          info Notification
        </Button>
        <br></br>
        <Button
          type="error"
          width="30vh"
          onClick={() => this.showreNotification("error")}
        >
          error Notification
        </Button>
        <br></br>
        <Button width="30vh" onClick={() => this.showreNotification("success")}>
          success Notification
        </Button>
        <br></br>

        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <Tag>随机颜色的tag</Tag>
        <br></br>
        <Switch size={3} />
        <br></br>
        
        <br></br>
        <Upload
          action="http://www.hanhuikrkr.com:8090/uploadtest"
          accept=".txt,.doc"
          size={0.1}
        >
          <div>上传功能测试：上传txt或者doc</div>
        </Upload>
        <ReTooltip overlay="text">
          <div
            style={{ backgroundColor: "grey", height: "6opx", width: "100px" }}
          >
            文字提醒测试
          </div>
        </ReTooltip>
        <div className="g-manage-demo-flex">
          <div>
          <FileUpload
            action="http://www.hanhuikrkr.com:8090/uploadtest"
            accept=".txt,.doc"
            size={0.1}
            onSuccess={this.onSuccess}
            onError={this.onError}
          ></FileUpload>
          </div>
          <div>
          <FileDownload fileType=".doc"></FileDownload>
          Word类型文件
          </div>
          <div>
          <FileDownload  fileType=".pdf"></FileDownload>
          Pdf类型文件
          </div>
         
          <div>
          <FileDownload  fileType=".xls"></FileDownload>
          Excel类型文件
          </div>

          <div>
          <FileDownload ></FileDownload>
          默认类型文件
          </div>
        </div>
      </div>
    );
  }
}

export default teacherTopicManage;
