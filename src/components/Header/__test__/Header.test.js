import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="Todos" />);
    const headingElement = screen.getByText(/todos/i);
    expect(headingElement).toBeInTheDocument();
  });
});
// it("should render same text passed into title by role method", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByRole("heading", { name: "Todos" });
//   expect(headingElement).toBeInTheDocument();
// });
// it("should render same text passed into title by test-id", () => {
//   render(<Header title="Todos" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });
// it("should render same text passed into title prop using async await", async () => {
//   render(<Header title="Todos" />);
//   const headingElement = await screen.findByText(/todos/i);
//   expect(headingElement).toBeInTheDocument();
// });
// it("get the headings using query", async () => {
//   render(<Header title="Todos" />);
//   const headings = screen.queryAllByRole("heading");
//   expect(headings.length).toBe(2);
// });
