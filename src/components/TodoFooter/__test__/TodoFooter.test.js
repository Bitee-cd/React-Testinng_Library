import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockRouter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
describe("Todo Footer", () => {
  it("should render the amount of incomplete tasks", () => {
    render(<MockRouter numberOfIncompleteTasks={5} />);
    const incompleteTasks = screen.getByText(/5 tasks left/i);
    expect(incompleteTasks).toBeInTheDocument();
  });
  it("should render 'task' when the  number of incomplete task is 1", () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const incompleteTasks = screen.getByText(/1 task left/i);
    expect(incompleteTasks).toBeInTheDocument();
  });
});
