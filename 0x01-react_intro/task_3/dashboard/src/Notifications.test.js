// src/Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders three list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    expect(
      screen.getByText('Here is the list of notifications')
    ).toBeInTheDocument();
  });
});
