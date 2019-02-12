import React from "react";
import Achievements from "../Achievements";
import renderer from "react-test-renderer";

describe("Testing Todo-component", () => {
  const tree = renderer.create(<Achievements />);

  describe("Testing rendering", () => {
    test("Achievements renders correctly", () => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
