import React from 'react';
import URLMenu from '../URLMenu';
import renderer from 'react-test-renderer';

//Jest test for URLMenu.js
//Creates a snapshot test which tests the rendering of the url menu

//snapshot test
describe("Testing URLMenu-component", () => {
  const component = renderer.create(<URLMenu />);
  const tree = renderer.create(<URLMenu />).getInstance();
  test("Renders correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });



  describe("Testing functions", () => {
  
//Tests if the function closes the pop-up form
    test("test handleClose", () => {
      tree.handleClose();
      expect(tree.state.open).toBeFalsy();
    });

//Tests if the the URL is valid or not
    test("test validateURL", () => {
      const url = "test";
      expect(tree.validateURL(url)).toBeFalsy();
      const validurll = "raw.githubusercontent.com/user/prosject/master/README.md";
      expect(tree.validateURL(validurll)).toBeTruthy();
    });

  });
});
