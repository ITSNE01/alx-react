import { normalize, schema } from 'normalizr';
import notifications from '../../../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity, keyed by its `guid`
const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);

// Define notification entity, keyed by its `id`, with nested author and context
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  },
  { idAttribute: 'id' }
);

// Normalize the array of notifications
export const normalizedData = normalize(notifications, [notification]);
