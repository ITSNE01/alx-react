import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import AppContext, { defaultUser, defaultLogOut } from './AppContext';
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
    // Local state now holds only "user" object
    this.state = {
      user: { ...defaultUser },
    };
    // bind methods
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user: { ...defaultUser } });
  }

  render() {
    const { user } = this.state;
    const { listCourses, listNotifications } = this.props;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Fragment>
          <Notifications
            displayDrawer={user.isLoggedIn}
            listNotifications={listNotifications}
            handleDisplayDrawer={() => {}}
            handleHideDrawer={() => {}}
          />

          <div className="App">
            <Header />

            <div className={css(styles.body)}>
              {!user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
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
  listCourses: PropTypes.array.isRequired,
  listNotifications: PropTypes.array.isRequired,
};

App.defaultProps = {
  listCourses: [],
  listNotifications: [],
};

export default App;

