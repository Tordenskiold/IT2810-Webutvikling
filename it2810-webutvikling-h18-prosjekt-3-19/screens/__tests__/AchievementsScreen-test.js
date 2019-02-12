import React from "react";
import AchievementsScreen from "../AchievementsScreen";
import renderer from "react-test-renderer";

test("AchievementsScreen renders correctly", () => {
  const tree = renderer.create(<AchievementsScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});
