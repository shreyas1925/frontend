import EntryModal from "..";
import { render, screen } from "@testing-library/react";

describe("EntryModal", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <EntryModal
        onClose={() => {}}
        show={true}
        fields={["name", "description"]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const { asFragment } = render(
      <EntryModal
        onClose={() => {}}
        show={true}
        fields={["name", "description"]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
