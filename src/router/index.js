import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const Login = asyncComponent(() => import("../page/login/index"))
const Detail = asyncComponent(() => import("../page/detail/index"))
const Home = asyncComponent(() => import("../page/home/index"))

// import Home from '../page/home/index'
// import Detail from '../page/detail/index'
// import Login from '../page/login/index'
export default class RouteConfig extends Component {  
  render () {
    return (
      // <HashRouter>
        <Switch>
          <Route exact path="/" exact={true} component={Home}/>
          <Route exact path="/detail" component={Detail}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      // </HashRouter>
          
    )
  }
}