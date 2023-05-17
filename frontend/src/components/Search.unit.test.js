import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';


test('Search input accepts text', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Enter search text');
    userEvent.type(input, 'test search');
    expect(input).toHaveValue('test search');
});
