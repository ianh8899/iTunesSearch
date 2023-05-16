import React from 'react';
import renderer from 'react-test-renderer';
import Search from './components/Search';

test('Search component renders correctly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
});

