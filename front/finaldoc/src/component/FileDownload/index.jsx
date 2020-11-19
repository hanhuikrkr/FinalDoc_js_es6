import React from "react";
import Card from "../Card";
import SimpleIcon from "../Icon";
import "./index.scss";
/**
 * FileDownload 文件下载的卡片ui组件
 * @param {fileTitle} string 文件名
 * @param {onDelete} function 删除函数
 * @param {onDownload} function 下载函数
 * @param {fileType} string 文件类型
 * @param {action} array Card功能区内容
 * @param {className} string 自定义类名
 */
function FileDownload(props) {
  let { fileTitle, fileType, onDelete, onDownload } = props;
  let fileType_icon = "iconillustration_XESFile";
  switch (fileType) {
    case ".doc":
    case ".docx":
      fileType_icon = "iconWord";
      break;
    case ".xls":
    case ".xlx":
    case ".xlxs":
      fileType_icon = "iconexcel1";
      break;
    case ".pdf":
      fileType_icon = "iconPDFicon";
    default:
      break;
  }
  return (
    <div className="g-file-download">
      {/* <Card
        className="g-file-download-card"
        headStyle={{ height: "10px" }}
        title={fileTitle}
        action={[
          <div>
            <SimpleIcon name={"iconupload_icon"}></SimpleIcon>下载文件
          </div>,
          <div>
            <SimpleIcon name={"iconclose"}></SimpleIcon>删除文件
          </div>,
        ]}
      > */}
      <div className="g-file-download-card">
        <div className="m-file-download-action">
            <div>
            <SimpleIcon
            name={"icongengduo"}
            className={"z-file-download-action-btn-icon"}
          ></SimpleIcon>
            </div>
          
          <div className="z-file-download-action-xActionChildren ">
            <div className="z-file-download-action-xActionChildrenBox">
              <div className="z-file-download-action-xActionItem" onClick={onDownload}>
                <SimpleIcon name={"iconupload_icon"}></SimpleIcon>下载文件
              </div>
              <div className="z-file-download-action-xActionItem" onClick={onDelete}>
                <SimpleIcon name={"iconclose"}></SimpleIcon>删除文件
              </div>
            </div>
          </div>
        </div>
        <SimpleIcon
          name={fileType_icon}
          className="m-file-download-content"
        ></SimpleIcon>
      </div>

      {/* </Card> */}
    </div>
  );
}

export default FileDownload;
