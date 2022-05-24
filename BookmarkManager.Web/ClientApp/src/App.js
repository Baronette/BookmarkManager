import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import AddBookmark from './pages/AddBookmark';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ViewBookmarks from './pages/ViewBookmarks';
import { UserContextComponent } from './UserContext';



export default class App extends Component {
  render() {
    return (
      <UserContextComponent>
        <Layout>
        <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/bookmarks' component={ViewBookmarks} />
          <PrivateRoute exact path='/addbookmark' component={AddBookmark} />
          <PrivateRoute exact path='/logout' component={Logout} />
        </Layout>
      </UserContextComponent>
    );
  }
}
