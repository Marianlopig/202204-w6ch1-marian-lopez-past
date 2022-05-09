import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "./TaskForm";

const mockAction = jest.fn();

describe("Given a TaskForm Component", () => {
  describe("When the submit is clicked", () => {
    test("Then it should call the action with the task", () => {
      const text = "test1";

      render(<TaskForm action={mockAction} />);
      const inputTaskName = screen.getByLabelText("Task:");
      const inputSubmitButton = screen.getByRole("button");

      userEvent.type(inputTaskName, text);
      userEvent.click(inputSubmitButton);

      const expectedObject = expect.objectContaining({
        name: text,
        done: false,
      });
      expect(mockAction).toBeCalledWith(expectedObject);
    });
  });
});
