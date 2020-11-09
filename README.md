<!--
 * @Author: your name
 * @Date: 2020-10-30 08:27:35
 * @LastEditTime: 2020-11-10 00:55:05
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
