import React from "react";
import Main from "../Main";
import renderer from "react-test-renderer";

describe("Testing Todo-component", () => {
  const tree1 = renderer.create(<Main />);
  const tree = renderer.create(<Main />).getInstance();

  test("renders correctly", () => {
    expect(tree1.toJSON()).toMatchSnapshot();
  });

  describe("Testing functions", () => {
    test("prevent empty notes from being added", () => {
      tree.addTodo();
      expect(tree.state.todoArray).toEqual([]);
    });

    test("add new note successfully", () => {
      tree.setState({ todoText: "do stuff" });
      tree.addTodo();
      expect(tree2.state.todoArray).toHaveLength(1);
    });

    test("delete note succcessfully", () => {
      tree.deleteTodo(0);
      expect(tree.state.todoArray).toHaveLength(0);
      expect(tree.state.todoArray).toEqual([]);
    });
  });
});
