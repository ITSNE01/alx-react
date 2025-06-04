import { Map } from 'immutable';

// Create the first Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

// Create the second Immutable Map by modifying the first one
export const map2 = map
  .set(2, 'Benjamin')
  .set(4, 'Oliver');
