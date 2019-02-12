import React from 'react';
import Searchbar from '../Searchbar';
import renderer from 'react-test-renderer';

//Jest test for Search.js and Store.js
//Creates a snapshot test which tests the rendering of the search bar using the elements from Store.js

it('renders without crashing', () => {
  const myMock = jest.fn();
  
  const component = renderer.create(
    <Searchbar onSearch = {myMock}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
