import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute"
import FriendList from "./components/FriendList"
import Header from "./components/Header"
import LoginForm from "./components/LoginForm"

console.log(localStorage.getItem('token'))
function App() {
  return (
    <div className="App">
      <Route path = "/login" component = {LoginForm} /> 
      <PrivateRoute path = "/protected" component = {FriendList} />
    </div>
  );
}

export default App;
