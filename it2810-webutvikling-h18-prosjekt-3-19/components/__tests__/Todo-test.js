import React from "react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

const completeMethod = jest.fn();

describe("Testing Todo-component", () => {
  const tree = renderer.create(
    <Todo val={""} completeMethod={completeMethod} />
  );

  describe("Testing rendering", () => {
    test("Todo renders correctly", () => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
