import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { render, screen } from "@testing-library/react";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("Followers List", () => {
  it("should return the first item of followers", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  //   it("should return all 5 followers", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
