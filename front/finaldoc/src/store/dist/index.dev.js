"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("./User"));

var _Manage = _interopRequireDefault(require("./Manage"));

var _Student = _interopRequireDefault(require("./Student"));

var _Teacher = _interopRequireDefault(require("./Teacher"));

var _Admin = _interopRequireDefault(require("./Admin"));

var _Topic = _interopRequireDefault(require("./Topic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  userStore: _User["default"],
  studentStore: _Student["default"],
  manageStore: _Manage["default"],
  teacherStore: _Teacher["default"],
  adminStore: _Admin["default"],
  topicStore: _Topic["default"]
};
exports["default"] = _default;