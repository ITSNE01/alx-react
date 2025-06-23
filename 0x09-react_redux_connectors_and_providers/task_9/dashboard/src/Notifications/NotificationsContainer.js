import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

export class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state)
    .valueSeq()
    .toJS(),
  displayDrawer:     state.ui.get('isNotificationDrawerVisible'),
});

export default connect(
  mapStateToProps,
  { fetchNotifications, markAsAread, setNotificationFilter }
)(NotificationsContainer);
