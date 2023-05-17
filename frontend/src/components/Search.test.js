import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';

test('Search component renders correctly', () => {
    render(<Search />);
    expect(screen.getByText('Search Text')).toBeInTheDocument();
    expect(screen.getByText('Search Criteria')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
});
