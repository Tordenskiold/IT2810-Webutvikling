import React from 'react';
import CustomInput from '../CustomInput';
import renderer from 'react-test-renderer';

//Jest test for CustomInput.js
//Creates a snapshot test which tests the rendering of the custom inputs
it('renders without crashing', () => {
  const component = renderer.create(
    <CustomInput />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
