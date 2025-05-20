import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';

class App extends Component {
  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.props;

    return (
      <Fragment>
        <Notifications
          displayDrawer
          listNotifications={listNotifications}
        />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login />
            )}
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
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
};

App.defaultProps = {
  isLoggedIn: false,
  listCourses: [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ],
  listNotifications: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ],
};

export default App;
