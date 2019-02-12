import React from 'react';
import Dropdown from '../Dropdown';
import renderer from 'react-test-renderer';

//Jest test for Dropdown.js
//Creates a snapshot test which tests the rendering of the drop down menus of the website.
it('renders without crashing', () => {
  let options = [];
  const component = renderer.create(
    <Dropdown options= {options}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
