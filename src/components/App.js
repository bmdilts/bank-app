import React from 'react';
import '../styles/App.css';

//import browser router
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
//import reactstrap
import { Button } from 'reactstrap';
//import components


export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className= "jumbotron">
          <h1 className= "display-3">BankShot</h1>
          <p className= "lead">Your world wide banking leader.</p>
          <hr className= "my-4"/>
          <p>Quick, fast, and sometimes accurate account results.</p>
          <p className= "lead">
            <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
          </p>
        </div>
      </div>
    );
  }
}
