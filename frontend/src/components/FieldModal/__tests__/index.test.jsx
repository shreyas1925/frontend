import FieldModal from "..";
import { render } from "@testing-library/react";

describe("Field Modal", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<FieldModal show={true} />);
    expect(asFragment()).toMatchSnapshot();
  });


  describe("when the modal is open", () => {
    it("should render the modal", () => {
      const { getByText } = render(<FieldModal show={true} />);
      expect(getByText("Close")).toBeInTheDocument();
    });
  });
  describe("when the modal is closed", () => {
    it("should not render the modal", () => {
      const { queryByText } = render(<FieldModal show={false} />);
      expect(queryByText("Close")).not.toBeInTheDocument();
    });
  });
});
