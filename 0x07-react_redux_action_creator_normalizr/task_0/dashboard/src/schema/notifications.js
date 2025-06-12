import notifications from '../../../notifications.json';

/**
 * Returns the array of notification.context objects
 * authored by the given userId.
 *
 * @param {string} userId
 * @returns {Array<Object>}
 */
export function getAllNotificationsByUser(userId) {
  return notifications
    .filter(entry => entry.author && entry.author.id === userId)
    .map(entry => entry.context);
}
