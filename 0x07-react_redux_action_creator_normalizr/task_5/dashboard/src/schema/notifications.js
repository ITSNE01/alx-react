import { normalize, schema } from 'normalizr';
import notificationsData from '../../../../notifications.json';

// Define entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
  'notifications',
  { author: user, context: message },
  { idAttribute: 'id' }
);

// Perform normalization once
export const normalizedData = normalize(notificationsData, [notification]);

/**
 * Returns an array of notification context objects (messages)
 * for the given userId, using the normalized dataset.
 *
 * @param {string} userId
 * @returns {Array<Object>}
 */
export function getAllNotificationsByUser(userId) {
  const {
    result: notifIds,
    entities: { notifications, messages },
  } = normalizedData;

  return notifIds.reduce((acc, notifId) => {
    const notif = notifications[notifId];
    if (notif.author === userId) {
      acc.push(messages[notif.context]);
    }
    return acc;
  }, []);
}
