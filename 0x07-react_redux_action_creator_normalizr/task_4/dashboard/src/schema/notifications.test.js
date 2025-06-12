import { normalizedData } from './notifications';

describe('schema normalization', () => {
  it('result array contains all notification IDs in order', () => {
    const expectedIds = [
      '5debd76480edafc8af244228',
      '5debd764507712e7a1307303',
      '5debd76444dd4dafea89d53b',
      '5debd76485ee4dfd1284f97b',
      '5debd7644e561e022d66e61a',
      '5debd7644aaed86c97bf9d5e',
      '5debd76413f0d5e5429c28a0',
      '5debd7642e815cd350407777',
      '5debd764c1127bc5a490a4d0',
      '5debd7646ef31e0861ec1cab',
      '5debd764a4f11eabef05a81d',
      '5debd764af0fdd1fc815ad9b',
      '5debd76468cb5b277fd125f4',
      '5debd764de9fa684468cdc0b',
    ];
    expect(normalizedData.result).toEqual(expectedIds);
  });

  it('users entity includes correct data for user 5debd764a7c57c7839d722e9', () => {
    const user =
      normalizedData.entities.users['5debd764a7c57c7839d722e9'];
    expect(user).toEqual({
      id: '5debd764a7c57c7839d722e9',
      email: 'poole.sanders@holberton.nz',
      picture: 'http://placehold.it/32x32',
      age: 25,
      name: { first: 'Poole', last: 'Sanders' },
    });
  });

  it('messages entity includes correct data for guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41', () => {
    const msg =
      normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];
    expect(msg).toEqual({
      guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
      isRead: false,
      type: 'default',
      value: 'Cursus risus at ultrices mi.',
    });
  });

  it('notifications entity includes correct mapping for notification 5debd7642e815cd350407777', () => {
    const notif =
      normalizedData.entities.notifications['5debd7642e815cd350407777'];
    expect(notif).toEqual({
      id: '5debd7642e815cd350407777',
      author: '5debd764f8452ef92346c772',
      context: '3068c575-d619-40af-bf12-dece1ee18dd3',
    });
  });
});
