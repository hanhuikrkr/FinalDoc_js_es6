"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.school_color = exports.state_diff = exports.colorIndex = exports.ADMIN_NAV_DATA = exports.MSG_TYPE = exports.STU_NAV_STAGE = exports.STU_OP_SCORE = exports.FILE_UPLOAD_FORMAT = exports.FILE_DOWNLOAD_TYPE = exports.FILE_UPLOAD_TYPE = exports.STU_ST_STATUS = exports.MENU_MAIN_S = exports.MENU_MAIN_T_AUDIT = exports.MENU_MAIN_T = exports.MENU_MAIN_M = exports.MONTH_FORMAT = exports.DATE_FORMAT = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon_setting = _interopRequireDefault(require("../icon/icon_setting.svg"));

var _icon_manage = _interopRequireDefault(require("../icon/icon_manage.svg"));

var _icon_audit = _interopRequireDefault(require("../icon/icon_audit.svg"));

var _icon_cp = _interopRequireDefault(require("../icon/icon_cp.svg"));

var _icon_notice = _interopRequireDefault(require("../icon/icon_notice.svg"));

var _icon_m_group = _interopRequireDefault(require("../icon/icon_m_group.svg"));

var _icon_m_divide = _interopRequireDefault(require("../icon/icon_m_divide.svg"));

var _icon_m_article = _interopRequireDefault(require("../icon/icon_m_article.svg"));

var _icon_m_progress = _interopRequireDefault(require("../icon/icon_m_progress.svg"));

var _icon_s_paper = _interopRequireDefault(require("../icon/icon_s_paper.svg"));

var _icon_s_select = _interopRequireDefault(require("../icon/icon_s_select.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DATE_FORMAT = "YYYY/MM/DD";
exports.DATE_FORMAT = DATE_FORMAT;
var MONTH_FORMAT = "YYYY/MM";
exports.MONTH_FORMAT = MONTH_FORMAT;
var MENU_MAIN_M = [{
  title: "分配审核选题",
  path: "/m_distributeTopic",
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  icon: _icon_m_divide["default"]
}, {
  title: "审核任务书",
  path: "/m_reviewPaper",
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  icon: _icon_m_progress["default"]
}, {
  title: "组织开题答辩",
  path: "/m_organizeOpendefence",
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  icon: _icon_m_group["default"]
}];
exports.MENU_MAIN_M = MENU_MAIN_M;
var MENU_MAIN_T = [{
  title: "通知公告",
  path: "/",
  all: true,
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  icon: _icon_notice["default"]
}, {
  title: "毕业设计管理",
  path: "/t_topic_manage",
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  icon: _icon_manage["default"]
}];
exports.MENU_MAIN_T = MENU_MAIN_T;
var MENU_MAIN_T_AUDIT = [{
  title: "初期命题审核",
  path: "/t_auditTP",
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
  icon: _icon_cp["default"]
}, {
  title: "中期开题审核",
  path: "/t_auditOP",
  state: [9],
  icon: _icon_audit["default"]
}, {
  title: "终期论文评阅",
  path: "/t_auditFD",
  state: [20],
  icon: _icon_audit["default"]
}];
exports.MENU_MAIN_T_AUDIT = MENU_MAIN_T_AUDIT;
var MENU_MAIN_S = [{
  title: "通知公告",
  path: "/",
  all: true,
  state: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  icon: _icon_notice["default"]
}, {
  title: "选择课题",
  path: "/s_selectTL",
  state: [-1, 0, 1, 2, 3],
  icon: _icon_s_select["default"]
}, {
  title: "课题详情",
  state: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  path: "/s_topicPG",
  icon: _icon_s_paper["default"]
}]; //学生选课状态

exports.MENU_MAIN_S = MENU_MAIN_S;
var STU_ST_STATUS = [{
  name: "未通过",
  color: "red"
}, {
  name: "待教师通过",
  color: "blue"
}]; //学生三阶段所需上传文件

exports.STU_ST_STATUS = STU_ST_STATUS;
var FILE_UPLOAD_TYPE = [{
  stage: "开题中期",
  file: [{
    name: "开题报告",
    type: "f_open"
  }, {
    name: "外文翻译",
    type: "f_tran"
  }, {
    name: "文献综述",
    type: "f_docs"
  }, {
    name: "中期检查表",
    type: "f_midcheck"
  }]
}, {
  stage: "论文审核",
  file: [{
    name: "论文定稿",
    type: "f_paper"
  }, {
    name: "设计作品",
    type: "f_design_opus"
  }, {
    name: "作品说明书",
    type: "f_manual"
  }, {
    name: "查重报告",
    type: "f_check"
  }]
}, {
  stage: "论文答辩",
  file: [{
    name: "答辩材料",
    type: "f_reply_source"
  }, {
    name: "答辩记录",
    type: "f_reply_log"
  }, {
    name: "答辩成绩表",
    type: "f_reply_score"
  }]
}]; //系主任端查看论文进度表中，能下载的学生上传的文件

exports.FILE_UPLOAD_TYPE = FILE_UPLOAD_TYPE;
var FILE_DOWNLOAD_TYPE = [{
  stage: "1. 开题中期",
  file: [{
    name: "开题报告",
    type: "f_open"
  }, {
    name: "外文翻译",
    type: "f_tran"
  }, {
    name: "文献综述",
    type: "f_docs"
  }, {
    name: "中期检查表",
    type: "f_midcheck"
  }]
}, {
  stage: "2. 论文审核",
  file: [{
    name: "论文定稿",
    type: "f_paper"
  }, {
    name: "设计作品",
    type: "f_design_opus"
  }, {
    name: "作品说明书",
    type: "f_manual"
  }, {
    name: "查重报告",
    type: "f_check"
  }, {
    name: "承诺书",
    type: "f_prom"
  }]
}, {
  stage: "3. 论文答辩",
  file: [{
    name: "答辩材料",
    type: "f_reply_source"
  }, {
    name: "答辩记录",
    type: "f_reply_log"
  }, {
    name: "答辩成绩表",
    type: "f_reply_score"
  }]
}]; //文件上传类型约束

exports.FILE_DOWNLOAD_TYPE = FILE_DOWNLOAD_TYPE;
var FILE_UPLOAD_FORMAT = {
  reply: ["zip", "ppt", "pptx"],
  doc: ["doc", "docx", "pdf"]
};
exports.FILE_UPLOAD_FORMAT = FILE_UPLOAD_FORMAT;
var STU_OP_SCORE = [{
  name: "指导老师评分",
  type: "t_reply_score"
}, {
  name: "开题答辩评分",
  type: "g_reply_score"
}]; // 学生端 Nav阶段名

exports.STU_OP_SCORE = STU_OP_SCORE;
var STU_NAV_STAGE = [["发布课题", "选择课题", "双选成功"], ["任务下达", "提交材料", "审核开题", "开题答辩"], ["提交材料", "评阅审核", "论文答辩", "成绩审定"]]; // 站内信类型

exports.STU_NAV_STAGE = STU_NAV_STAGE;
var MSG_TYPE = ["info", "success", "warning", "error"]; //管理端
//管理端nav

exports.MSG_TYPE = MSG_TYPE;
var ADMIN_NAV_DATA = [{
  title: "公告文档",
  childData: [{
    title: "公告管理",
    path: "/admin_ann"
  }, {
    title: "文档管理",
    path: "/admin_file"
  }],
  path: "/admin_ann",
  icon: "BankOutlined",
  stateNum: 0
}, {
  title: "选题管理",
  childData: [{
    title: "option1",
    path: "/admin"
  }, {
    title: "option2",
    path: "/admin"
  }],
  path: "/admin_topic_admin",
  icon: "BankOutlined",
  stateNum: 1
}, {
  title: "中期检查",
  childData: [{
    title: "option1",
    path: "/admin"
  }, {
    title: "option2",
    path: "/admin"
  }],
  path: "/admin_mid_check",
  icon: "BankOutlined",
  stateNum: 2
}, {
  title: "评阅答辩",
  childData: [{
    title: "option1",
    path: "/admin"
  }, {
    title: "option2",
    path: "/admin"
  }],
  path: "/admin_debate_review",
  icon: "BankOutlined",
  stateNum: 3
}, {
  title: "成绩分析",
  childData: [{
    title: "option1",
    path: "/admin"
  }, {
    title: "option2",
    path: "/admin"
  }],
  path: "/admin_score_analysis",
  icon: "BankOutlined",
  stateNum: 4
}, {
  title: "系统设置",
  childData: [{
    title: "option1",
    path: "/admin"
  }, {
    title: "option2",
    path: "/admin"
  }],
  path: "/admin_sys_set",
  icon: "BankOutlined",
  stateNum: 0
}]; //色彩管理

exports.ADMIN_NAV_DATA = ADMIN_NAV_DATA;
var colorIndex = ["#2ae0c8", "#a2e1d4", "#acf6ef", "#cbf5fb", "#bdf3d4", "#e6e2c3", "#e3c887", "#fad8be", "#fbb8ac", "#fe6673", "#666666", "#666699", "#6666CC", "#6666FF", "#669966", "#669999", "#6699CC", "#6699FF", "#66CC66", "#66CC99", "#66CCCC", "#66CCFF", "#66FF66", "#66FF99", "#66FFCC", "#66FFFF", "#996666", "#996699", "#9966CC", "#9966FF", "#999966", "#999999", "#9999CC", "#9999FF", "#99CC66", "#99CC99", "#99CCCC", "#99CCFF", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF"]; //整个论文管理系统的状态分析
//一个学生对应一个命题，所以学生端的状态显示和论文状态一致
//教师与论文的关系是一对多，且教师有分系主任等，因此教师使用{当前负责论文中的最小值}阶段作为当前阶段
//系主任拥有一键进入下一阶段的权限

exports.colorIndex = colorIndex;
var state_diff = [{
  title: "重新选题",
  description: "在第一阶段，学生选择某课题，但是被拒绝，代表该学生可以重新选择课题",
  number: -1
}, {
  title: "新建课题",
  description: "老师新建课题，但尚未被系主任审核通过，学生目前不可见该课题",
  number: 0
}, {
  title: "审核发布",
  description: "系主任通过该老师课题，但课题尚未发布，学生目前不可见",
  number: 1
}, {
  title: "选择课题",
  description: "系主任已经一键发布，若原本没有学生的课题则可被学生端可见，即处于被学生选择的状态；若原本就有选择学生，则直接进入阶段4*",
  number: 2
}, {
  title: "通过课题",
  description: "有学生选择了该课题，但是指导教师尚未同意该学生的选择，等待教师决定是否通过; ",
  number: 3
}, {
  title: "双选成功",
  description: "教师通过该学生的选择课题，至此 第一阶段的双选环节已经结束;",
  number: 4
}, {
  title: "任务提交",
  description: "教师提交了任务书，但目前学生端仍无法下载，需要系主任审核通过。",
  number: 5
}, {
  title: "任务审核",
  description: "系主任审核通过任务书，等待服务器的循环渲染",
  number: 6
}, {
  title: "任务下载",
  description: "pdf处理完任务书，学生端可见pdf的任务书，可下载任务书.pdf；至此进入可以审核开题阶段的准备工作都已完成，等待系主任分配开题答辩小组",
  number: 7
}, {
  title: "开题准备",
  description: "开题阶段分配完小组 group字段显示小组组号，可在group表中查询小组的组长和教师，通过group编号查询group_info查询分组地点时间信息 。开题答辩和开题延缓答辩同理且分组编号不重复。只有当系主任全部分配好小组后才能进入下一阶段。等待系主任点击进入下一阶段",
  number: 8
}, {
  title: "开题答辩",
  description: "系主任点击进入下一阶段，此时学生端提交延缓开题答辩申请窗口关闭，系主任不得再次提交分组申请。等待该课题的开题答辩组长对开题答辩打分",
  number: 9
}, {
  title: "文件提交",
  description: "已有该课题开题答辩成绩,通过op_score的pid进行查找，等待学生端提交一系列文件：一系列文件标准：指导日志pdf版（证明服务器已渲染）论文正稿 查重报告 设计作品 （备注：此处因为删除或修改的可能，即每次对以上文件进行修改时。状态需返回10）",
  number: 10
}, {
  title: "等待分组",
  description: "若该课题以满足上述文件提交规则 则进入状态11，等待系主任分配评阅组；",
  number: 11
}, {
  title: "评阅准备",
  description: "系主任对该课题分组，状态码转为12；此时可能存在情况 ：该学生没交全，状态码仍然是10，对状态10的学生线下提醒。但系主任仍然可以对状态10的课题进行分组。须在前端强调显示此类学生。当所有课题都进入状态12时，可由系主任点击进入下一阶段。等待系主任进入评阅阶段",
  number: 12
}, {
  title: "课题评阅",
  description: "系主任已点击进入评阅阶段 等待评阅组长对课题打分，此时系主任不得再分配评阅分组。即使之前存在未按时递交文件的课题，评阅人也需对此类课题打分；若评阅人对该课题提交评阅分数，则状态转为14",
  number: 13
}, {
  title: "评阅结束",
  description: "已有评阅分数，在review_socre中可查看，等待系主任对状态14的课题进行分组，若系主任提交分组则状态转为15",
  number: 14
}, {
  title: "一辩准备",
  description: "最终答辩的一辩阶段分配完小组 group字段显示小组组号，可在group表中查询小组的组长和教师，通过group编号查询group_info查询分组地点时间信息 。开题答辩、开题延缓答辩、最终一辩、一辩延期分组编号不重复。只有当系主任全部分配好小组后才能进入下一阶段。等待系主任点击进入第一次毕业答辩阶段。",
  number: 15
}, {
  title: "一次答辩",
  description: "系主任已点击进入第一次毕业答辩阶段；各端发布第一次答辩信息，学生端关闭第一次延缓答辩申请窗口，系主任不得再提交第一次答辩分组；等待答辩组组长对该课题进行第一次答辩评分，若给出评分 则进入阶段17",
  number: 16
}, {
  title: "一辩结束",
  description: " 该课题已有第一次答辩成绩，可在fd_socre中查询，学生端开放第二次答辩申请窗口，若学生申请第二次答辩，则进入状态18",
  number: 17
}, {
  title: "二辩审核",
  description: "该课题已经申请第二次答辩，等待系主任审核通过该该申请后 状态转为19，若系主任拒绝该课题二次答辩，则状态为17",
  number: 18
}, {
  title: "允许二辩",
  description: "系主任已经审核通过该申请，等待对第二次答辩进行分组；",
  number: 19
}, {
  title: "二辩准备",
  description: "该课题已经完成第二次答辩分组  group字段显示小组组号，可在group表中查询小组的组长和教师，通过group编号查询group_info查询分组地点时间信息 。开题答辩、开题延缓答辩、最终一辩、一辩延期和二辩分组编号不重复。二辩不存在二辩延期。只有当系主任全部分配好小组、所有状态19已成为状态20后才能进入下一阶段。等待系主任点击进入第二次毕业答辩阶段",
  number: 20
}, {
  title: "二次答辩",
  description: "系主任已点击进入第二次毕业答辩阶段；各端发布第二次答辩信息，学生端关闭二辩申请窗口，系主任不得再提交第二次答辩分组；对原状态为17的课题，状态码转为22，等待答辩组组长对该课题进行第二次答辩评分，若给出评分，则更新原来fd_socre的成绩，进入阶段22 ",
  number: 21
}, {
  title: "提交文件",
  description: "课题结束答辩，课题进入状态22，若该课题所有文件已提交，则进入状态23.",
  number: 22
}, {
  title: "上传完毕",
  description: "该课题文件已全部提交，等待系主任点击结束毕业论文答辩。",
  number: 23
}, {
  title: "答辩结束",
  description: "所有课题的所有文件已提交 ，学生端关闭提交文件窗口，教师端关闭修改成绩窗口，系主任已点击结束毕业答辩按钮，服务器定时任务，凌晨渲染所有文件为pdf 该课题所有文件渲染完成则状态码转为25",
  number: 24
}, {
  title: "查看资料",
  description: "该文件所有文件均渲染为pdf格式，系主任，管理端通过下载窗口。",
  number: 25
} // {
//   title: "备用",
//   description: "xxxxxxxx",
//   number: 26,
// },
// {
//   title: "备用",
//   description: "xxxxxxx",
//   number: 27,
// },
];
exports.state_diff = state_diff;
var school_color = "#0585D0";
exports.school_color = school_color;