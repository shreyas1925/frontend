import Modal from "..";
import { render } from "@testing-library/react";

describe("Modal", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Modal show={true}/>);
    expect(asFragment()).toMatchSnapshot();
  });
  describe("when the modal is open", () => {
    it("should render the modal", () => {
      const { getByText } = render(<Modal show={true} />);
      expect(getByText("Close")).toBeInTheDocument();
    });
  });
  describe("when the modal is closed", () => {
    it("should not render the modal", () => {
      const { queryByText } = render(<Modal show={false} />);
      expect(queryByText("Close")).not.toBeInTheDocument();
    });
  });
});
