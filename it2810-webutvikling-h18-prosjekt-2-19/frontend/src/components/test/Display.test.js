import React from 'react';
import Display from '../Display';
import Store from '../../Store';
import renderer from 'react-test-renderer';

//Jest test for Display.js
//Creates a snapshot test which tests the rendering of the display of the website
it('renders without crashing', () => {
  const appstore = new Store();
  const component = renderer.create(
    <Display store={appstore} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
