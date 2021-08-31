import React from 'react';
import { HomePage } from './pages'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signIn" render={() => <h1>登录页面</h1>}></Route>
        <Route
          render={() => {
            ;<h1>404</h1>
          }}
        ></Route>
      </Switch>
    </Router>
  )
}

export default App;
