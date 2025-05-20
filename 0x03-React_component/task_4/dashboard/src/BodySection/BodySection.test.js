import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders an h2 and children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toBe('test title');

    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toBe('test children node');

    // CSS class applied
    expect(wrapper.find('.bodySection')).toHaveLength(1);
  });
});
