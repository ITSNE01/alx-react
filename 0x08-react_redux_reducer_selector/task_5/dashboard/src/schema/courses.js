import { normalize, schema } from 'normalizr';

// Define a course entity and auto-add isSelected: false
const courseEntity = new schema.Entity(
  'courses',
  {},
  {
    processStrategy: (value) => ({
      ...value,
      isSelected: false,
    }),
  }
);

/**
 * Normalize an array of course objects into { entities: { courses } }
 */
export function coursesNormalizer(data) {
  return normalize(data, [courseEntity]);
}
