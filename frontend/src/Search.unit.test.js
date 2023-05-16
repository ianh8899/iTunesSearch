import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './components/Search';

test('Search input accepts text', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Enter search text');
    userEvent.type(input, 'test search');
    expect(input).toHaveValue('test search');
});
