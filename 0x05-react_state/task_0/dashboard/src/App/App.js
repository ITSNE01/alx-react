import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications, logOut } = this.props;
    const { displayDrawer } = this.state;

    return (
      <Fragment>
        <Notifications
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />

          <div className={css(styles.body)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}

            <BodySection title="News from the School">
              <p>
                Welcome to our school! Don’t miss the spring festival this weekend,
                and check out our latest news and events here.
              </p>
            </BodySection>
          </div>

          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f9f9f9',
    minHeight: 'calc(100vh - 140px)',
    padding: '40px',
  },
  footer: {
    borderTop: '3px solid #e11d3f',
    padding: '10px 0',
    textAlign: 'center',
  },
});

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
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ],
  logOut: () => {},
};

export default App;
