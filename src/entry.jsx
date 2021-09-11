
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App.jsx'
import json from './../index.json'

var myjson = JSON.stringify(json)

ReactDOM.render(
  <>
  <div>{myjson.hello}</div>
  <App />
  </>, document.getElementById('app'))