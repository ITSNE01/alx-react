import { normalize, schema } from 'normalizr';

// Define a notification entity and auto-add isRead: false
const notificationEntity = new schema.Entity(
  'notifications',
  {},
  {
    idAttribute: 'id',
    processStrategy: (value) => ({
      ...value,
      isRead: false,
    }),
  }
);

/**
 * Normalize an array of notification objects into { entities: { notifications } }
 */
export function notificationsNormalizer(data) {
  return normalize(data, [notificationEntity]);
}
