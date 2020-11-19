import React, { Component } from "react";

import PropTypes from "prop-types";
import Upload from "../Upload";
import SimpleIcon from "../Icon";
import "./indedx.scss";

/**
 * @description: upload 上传组件的ui封装
 * @param  name: string // 上传的字段文件名
 * @param  action: string // 上传的路径 
 * @param  accept:string // 允许上传的类型
 * @param  size:number // 限制的大小
 * @param  onSuccess: Function // 成功之后的回调函数
 * @param data:object/function(file)上传所需额外参数或返回上传额外参数的方法

 * @param  onError:Function 上传失败后的回调函数

 * 
 * @return {*}
 */
class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fileUrl: "",
      showDel: false,
    };
  }
  onStart = () => {
    this.setState({
      loading: true,
    });
  };

  componentDidMount() {
    console.log(
      "FileUpload -> componentDidMount -> componentDidMount",
      "componentDidMount"
    );
  }

  componentDidUpdate(prevProps) {
    console.log(
      "FileUpload -> componentDidUpdate -> componentDidUpdate",
      "componentDidUpdate"
    );
  }

  render() {
    const { name, action, accept, size, onError, onSuccess, data } = this.props;
    const { loading } = this.state;

    // console.log(this.props.disabled);
    return (
      <Upload
        name="file"
        action={action}
        data={data}
        accept={accept}
        size={size}
        onSuccess={onSuccess}
        onError={onError}
        onStart={this.onStart}
      >
        <div className="g-file-upload">
          <div className="m-file-upload">
            <div className="m-file-icon">
              {loading ? (
                <SimpleIcon
                  name="iconloading"
                  classname="m-file-SimpleIcon"
                  type="spin"
                />
              ) : (
                <SimpleIcon name="iconplus" classname="m-file-SimpleIcon" />
              )}
            </div>
          </div>
        </div>
      </Upload>
    );
  }
}

export default FileUpload;
