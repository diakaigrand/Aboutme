import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Diana's Amazing Page</h1>
        </header>
        <nav><Navigation /></nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Hobbies">
            <Hobbies />
          </Route>
          <Route exact path="/Family">
            <Family />
          </Route>
          <Route exact path="/Bootcamp">
            <Bootcamp />
          </Route>
        </Switch>
    


      </div>
    </Router>

  )
}
function Home(){
  return (
    <div></div>
  )
}
function Navigation() {
  return (
    <ul className="menu">
      <li><Link to="/">Home</Link></li>

      <li><Link to="/Hobbies">Hobbies</Link></li>
      <li><Link to="/Family">Family</Link></li>
      <li><Link to="/Bootcamp">Bootcamp</Link></li>
    </ul>

  )
}

function Hobbies() {
  return (
    <div>
      <h3>My Hobbies</h3>
      <ol>Hiking</ol>
      <ol>Walking</ol>
      <ol>Fishing</ol>
      <ol>Dancing</ol>

    </div>
  )
}

function Family() {
  return (
    <div>
      <h3>My Family</h3>
      <ol>Nancy</ol>
      <ol>Miguel</ol>
      <ol>Marlon</ol>
      <ol>Jefferson</ol>
      <ol>Steven</ol>
      <ol>Joshua</ol>
    </div>
  )
}

function Bootcamp() {
  return (
    <div>
      <h3>Helio Training</h3>
      <ol>HTML</ol>
      <ol>CSS</ol>
      <ol>JS</ol>
      <ol>React</ol>
    </div>
  )
}
export default App;

