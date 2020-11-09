import React from "react";
import Loadable from "./component/Loadable";
import Nav from "./component/nav";
import "./style/globalStyle.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              component={Loadable({
                loader: () => import("./app/login/index"),
              })}
            />
            <Route
              path="/"
              render={() => (
                <div id="app">
                  <Nav />
                  <div id="context">
                    <Switch>
                      <Route
                        exact
                        path="/"
                        component={Loadable({
                          loader: () => import("./app/home/index.js"),
                        })}
                      />
                       <Route
                        exact
                        path="/t_topic_manage"
                        component={Loadable({
                          loader: () => import("./app/t/manage/index"),
                        })}
                      />
                    </Switch>
                  </div>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
