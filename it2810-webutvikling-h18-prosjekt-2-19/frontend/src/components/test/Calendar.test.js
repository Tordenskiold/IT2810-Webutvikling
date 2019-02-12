import React from 'react';
import Calendar from '../Calendar';
import renderer from 'react-test-renderer';

//Jest test for Calendar.js
//Creates a snapshot test which tests the rendering
describe("Testing Calendar-component", () => {
  const component = renderer.create(<Calendar />);
  const tree = renderer.create(<Calendar />).getInstance();

  test("renders correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});