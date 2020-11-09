
import React, { Component } from "react";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import { configure } from "mobx";
import './style/globalStyle.scss'
import injects from "./store";
import App from "./App";


import "antd/dist/antd.css";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
ReactDOM.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <App></App>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
)
