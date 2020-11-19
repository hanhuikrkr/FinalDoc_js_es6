<!--
 * @Author: your name
 * @Date: 2020-10-30 08:27:35
 * @LastEditTime: 2020-11-20 01:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \FinalDoc_js_es6\README.md
-->
# FinalDoc_js_es6

毕业论文管理系统
[FinalDocts](https://github.com/hanhuikrkr/finedoc_rebuild)  的react+jsES6版本

> ## 更新日志
---------
## 2020年10月30日 ~ 2020年11月9日


- [ - ] 去除：不再区分NavS, NavT, NavM 
- [ + ] 新增：统一使用通用组件nav
- [ + ] 新增：获取各类用户的state阶段的前后端接口（Mysql内判断user.id的长度）
- [ X ] 修改：拆封nav组件为navHead，navMenu，navFoot。
```javascript
 return (
      <div className="g-moudel-nav">
        <Navhead />
        <NavMenuBody />
        <NavFoot />
      </div>
    );
  ```
- [ x ] 修改：根据用户身份，阶段不同，switch渲染不同的数据渲染
```javascript
// 渲染四个阶段 当前阶段的前一个阶段，当前阶段，当前阶段的后面两个阶段
item.number >= this.NavStage - 1 && item.number <= this.NavStage + 2 && (
                <span key={id+"span"}
                  className={item.number === this.NavStage ? "m-st active" : "m-st"}
                >
                  {item.title}
                </span>
              )
```
--------
- [ - ] 去除过于繁琐的逻辑：不再以用户身份分别请求后端获取state阶段之后区分大阶段分别获取不同大阶段所对应的大阶段menu信息
- [ x ] 修改：合并所有大阶段，在所有menu信息下附加 $适用小阶段的信息，根据nav组件获取到的topic.state，去匹配 { 该menu组件在此topic.state是否允许}
```javascript
{
    title: "选择课题",
    path: "/s_selectTL",
    state:[-1,0,1,2,3],//此为对应的topic.state阶段
    icon: select,
  }
```

```javascript
{navMenuComponent.map(
            (item, i) =>
            //begin 更具state判断是否渲染该menu组件
              item.state.indexOf(this.NavStage) > -1 && (
            //end
                <NavLink to={item.path} key={i + "navMenuComponent"}>
                  <div
                    className={cur == i ? "m-menu-item active" : "m-menu-item"}
                    key={i + "div"}
                    onClick={this.doMenu.bind(this, item.path, i)}
                  >
                    <img src={item.icon} />
                    <span className="m-menu-span">{item.title}</span>
                  </div>
                </NavLink>
              )
          )}
```
- [ x ] 修改：去除重复的组件引入，公告通知组件不再分别引入/t /m /s 而是改为 / 即为home组件
- [ + ] 新增：加载页面loadingPage
- [ x ] 修改：重写request请求
- [ x ] 修改：baseaction
- [ + ] 新增：request异常处理

- [ * ] 开发：基于react，不依赖其他第三方库，完成以下ui组件开发
> * Drawer 抽屉组件
> * Modal  模态框组件
> * Button 按钮组件
> * Card   卡片组件
> * Divider 分隔符组件
--------
## TODO：
正在开发的组件：
* Form 表单组件
* Select 选择组件
* Tag 标签组件
* option 选择组件中分离出的选择项组件
* Notification 通知组件（之后开发中完全取代Message）
* Input 输入框组件
* Textarea 多行文本输入组件
* Progress 进度条组件
* Switch 开关组件
* Upload 上传组件

需要修复的问题：
* 教师端组件全部继承自baseAction，数据请求未分离，数据状态管理混乱
* 系主任段判断繁琐，需要使用switch替代

 
需要完成的阶段任务:
* 第一阶段所有业务逻辑

---------
## 2020年11月9日 ~ 2020年11月19日
- [ x ] 修复：modal组件开启动画异常问题
- [ * ] 开发：完成以下组件开发

> * Upload 上传功能组件
> * FileDownload 文件下载组件
> * Switch  开关组件
> * Icon 基于Iconfont项目图标库封装的图标组件
> * Notification   消息提醒组件
> * Tag 标签组件
> * Tooltip 文字提醒组件

- [ + ] 对Upload 上传功能组件进行二次组件封装的 FileUpload函数
 
下面对 Upload 功能组件进行说明：

 * @description: upload 上传组件的功能封装
 * @param  name: string  上传的字段文件名
 * @param  action: string  上传的路径 
 * @param  multiple:boolean  是否多选
 * @param  accept:string  允许上传的类型
 * @param  size:number  限制的大小
 * @param  onSuccess: Function  成功之后的回调函数
 * @param data:object/function(file)上传所需额外参数或返回上传额外参数的方法

 * @param  onError:Function 上传失败后的回调函数
 * @param onStart:Function 开始上传回调函数

在Upload 功能组件中 已经内置封装了默认的onSuccess和onError的回调函数。文件上传成功与否都会通过Notification组件弹出并提醒
```javascript
 function onSuccess(result) {
    /**
     * @description: 默认的成功回调函数
     */
    let { onSuccess } = props;
    if (onSuccess) {
      let targetItem = { result: result, status: "success" };
      onSuccess(targetItem);
    }
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
     /**
     * @description: 默认的失败回调函数
     */
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

```
在Upload 功能组件中 封装了beforeUpload回调函数，并且不对外暴露方法。在文件开始上传前会对文件的格式，大小进行检查。若不符合要求，则会通过Notification组件弹出提醒并拒绝上传请求。

```javascript
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
```

而在FileUpload组件中，主要是对Upload功能组件的ui封装，包括显示是否正在上传的ui图标切换。

在FileDownload组件中，包括文件下载，文件删除以及根据文件类型判断切换ui图标。

## TODO：
目前组件开发还剩下
* Input 输入框组件
* Form 表单组件
* Select 选择组件
  
这三个对第一阶段业务逻辑影响不大；故下周开始完成第一阶段的业务逻辑部分。
