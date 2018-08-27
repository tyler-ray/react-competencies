import {Switch, Route} from 'react-router-dom'
import React from 'react'

import App from './App'
import FunctionalComp from './Components/two'
import Stateful from './Components/one'
export default <Switch>

    <Route exact path = '/' component = {App}/>
    <Route path = '/stateful' component = {Stateful}/>
    <Route path = '/functional' component = {FunctionalComp}/>
    <Route path = '/' component = {NotFound}/>


</Switch>