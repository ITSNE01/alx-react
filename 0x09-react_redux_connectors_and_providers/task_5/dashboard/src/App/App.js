import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import AppContext, { defaultUser } from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
} from '../actions/uiActionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...defaultUser },
      listNotifications: props.listNotifications,
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState((prev) => ({
      listNotifications: prev.listNotifications.filter((n) => n.id !== id),
    }));
  }

  render() {
    const {
      listCourses,
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      loginRequest,
      logout,
    } = this.props;
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: logout }}>
        <Fragment>
          <Notifications
            displayDrawer={displayDrawer}
            listNotifications={listNotifications}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />

          <div className="App">
            <Header />

            <div className={css(styles.body)}>
              {!isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={loginRequest} />
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
      </AppContext.Provider>
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
  listCourses:                   PropTypes.array.isRequired,
  listNotifications:             PropTypes.array.isRequired,
  isLoggedIn:                    PropTypes.bool.isRequired,
  displayDrawer:                 PropTypes.bool.isRequired,
  displayNotificationDrawer:     PropTypes.func.isRequired,
  hideNotificationDrawer:        PropTypes.func.isRequired,
  loginRequest:                  PropTypes.func.isRequired,
  logout:                        PropTypes.func.isRequired,
};

App.defaultProps = {
  listCourses:       [],
  listNotifications: [],
};

const mapStateToProps = (state) => ({
  isLoggedIn:    state.uiReducer.isUserLoggedIn,
  displayDrawer: state.uiReducer.isNotificationDrawerVisible,
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
