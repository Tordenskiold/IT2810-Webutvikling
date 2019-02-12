import React from "react";
import TabBarIcon from "../TabBarIcon";
import renderer from "react-test-renderer";

test("TabBarIcons renders correctly", () => {
  const tree = renderer.create(<TabBarIcon />);
  expect(tree.toJSON()).toMatchSnapshot();
});
