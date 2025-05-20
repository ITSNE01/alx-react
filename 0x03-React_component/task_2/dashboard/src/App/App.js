import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

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
  isLoggedIn:        PropTypes.bool,
  listCourses:       PropTypes.array,
  listNotifications: PropTypes.array,
  logOut:            PropTypes.func,
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
    { id: 2, type: 'urgent',  value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ],
  logOut: () => {},
};

export default App;
