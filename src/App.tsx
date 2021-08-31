import React from 'react';
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signIn" component={SignInPage}></Route>
        <Route path="register" component={RegisterPage}/>
        <Route path="/detail/:touristRouteId" component={DetailPage}/>

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
