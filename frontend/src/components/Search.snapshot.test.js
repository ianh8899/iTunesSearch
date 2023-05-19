import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

test('Search component snapshot test', () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
