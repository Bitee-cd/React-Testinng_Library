import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";
const MockRouter = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};
describe("Todo", () => {
  it("should display thesame task entered in input element", () => {
    render(<MockRouter />);
    addTask(["Getting Started with Documentation"]);
    const divElement = screen.getByText(/Getting Started with Documentation/i);
    expect(divElement).toBeInTheDocument();
  });
  it("should render multiple tasks", () => {
    render(<MockRouter />);
    addTask([
      "Getting Started with Documentation",
      "Pet My Cat",
      "Take my Bath",
    ]);
    const divElements = screen.getAllByTestId(/task-container/i);
    expect(divElements.length).toBe(3);
  });
  it("tasks should not have completed class when initially rendered ", () => {
    render(<MockRouter />);
    addTask([
      "Getting Started with Documentation",
      "Pet My Cat",
      "Take my Bath",
    ]);
    const divElement = screen.getByText(/Getting Started with Documentation/i);
    expect(divElement).not.toHaveClass("todo-item-active");
    // expect(divElements.length).toBe(3);
  });
  it("tasks should have active element class when clicked", () => {
    render(<MockRouter />);
    addTask([
      "Getting Started with Documentation",
      "Pet My Cat",
      "Take my Bath",
    ]);
    const divElement = screen.getByText(/Getting Started with Documentation/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
