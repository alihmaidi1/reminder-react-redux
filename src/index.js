import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app/app";
import "bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
import {createStore} from "redux"
import reducer from './redux/reducer';
const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
      <App/>
</Provider>
    
,document.getElementById("root"))