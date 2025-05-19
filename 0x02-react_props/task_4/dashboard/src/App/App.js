import React, { Component, Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
App.defaultProps = {
  isLoggedIn: false,
};

export default App;
