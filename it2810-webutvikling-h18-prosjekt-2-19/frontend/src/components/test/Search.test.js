import React from 'react';
import Search from '../Search';
import Store from '../../Store';
import renderer from 'react-test-renderer';

//Jest test for Search.js and Store.js
//Creates a snapshot test which tests the rendering of the search using the elements from Store.js
it('renders without crashing', () => {
  const appstore = new Store();
  const component = renderer.create(
    <Search store={appstore} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
