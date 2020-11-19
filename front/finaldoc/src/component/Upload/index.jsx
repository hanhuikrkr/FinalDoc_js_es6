import React from "react";
import PropTypes from "prop-types";
import RcUpload from "rc-upload";
import classnames from "classnames";
import reNotification from "../Notification";
import { fileToObject } from "../../util/file";
/**
 * @description: upload 上传组件的功能封装
 * @param  name: string // 上传的字段文件名
 * @param  action: string // 上传的路径 
 * @param  multiple:boolean // 是否多选
 * @param  accept:string // 允许上传的类型
 * @param  size:number // 限制的大小
 * @param  onSuccess: Function // 成功之后的回调函数
 * @param data:object/function(file)上传所需额外参数或返回上传额外参数的方法

 * @param  onError:Function 上传失败后的回调函数
 * @param onStart:Function 开始上传回调函数
 * @return
 */

function Upload(props) {
  const { name, action, multiple, accept, fileSize, data, children } = props;
  // 文件开始上传
  function onStart(file) {
    const targetItem = fileToObject(file);
    targetItem.status = "uploading";
    let { onStart } = props;
    if (onStart) {
      onStart(targetItem);
    }
    console.log("upload ->onStart file", targetItem);
  }

  function onProgress(file) {
    console.log("upload ->onProgress file", file);
  }
  function onSuccess(result) {
    /**
     * @description: 默认的成功回调函数
     * @param {}
     * @return {*}
     */
    let { onSuccess } = props;
    if (onSuccess) {
      let targetItem = { result: result, status: "success" };
      onSuccess(targetItem);
    }
    console.log("upload -> res", result);
    const { code, msg, data } = result;
    if (code !== 200) {
      reNotification.pop({
        type: "error",
        message: `上传失败`,
        description: `${msg} with in ${data}`,
      });
    } else {
      reNotification.pop({
        type: "success",
        message: `上传成功`,
        description: `${msg}`,
      });
    }
  }
  function onError(err, response, file) {
    let { onError } = props;
    if (onError) {
      let targetItem = { result: response, status: "error" };
      onError(targetItem);
    }

    reNotification.pop({
      type: "error",
      message: `上传失败`,
      description: `${err}`,
    });
  }
  function beforeUpload(file, fileList) {
    const { size, name } = file;
    let a = "文件上传出错";
    return new Promise((resolve, reject) => {
      // 对文件的信息进行 类型判断
      let index = name.lastIndexOf(".");
      let typeArry = accept.split(",");
      let suffer = name.substring(index, name.length);
      console.log("beforeUpload -> suffer", suffer);

      if (typeArry.indexOf(suffer) < 0) {
        a = "请上传正确类型的文件";
        reNotification.pop({
          type: "error",
          message: `上传失败`,
          description: `${a}`,
        });
        reject(a);
      }
      if (size / 1024 / 1024 > fileSize) {
        // 对文件进行 大小判断
        a = `上传文件的大小不能超过${fileSize}M`;
        reNotification.pop({
          type: "error",
          message: `上传失败`,
          description: `${a}`,
        });
        reject(a);
      }
      resolve(file);
    });
  }
  const config = {
    action: action,
    name: name,
    accept: accept, // 默认上传的是图片
    multiple: multiple, // 多选
    onStart: onStart, // 开始上传文件
    onProgress: onProgress, // 进度回调，仅适用于现代浏览器
    onSuccess: onSuccess, // 成功回调
    onError: onError, // 错误回调
    beforeUpload: beforeUpload, // 上传前的验证
    data: data,
  };
  return (
    <div>
      {" "}
      <RcUpload {...config}>{children}</RcUpload>
    </div>
  );
}
export default Upload;
