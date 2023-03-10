import { BrowserRouter } from "react-router-dom";
import Viewbar from "..";
import { render } from "@testing-library/react";
describe("Viewbar", () => {
    const contents = [
        {
            name: "CMS+",
            id: 1,
        },
        {
            name: "CMS+",
            id: 2,
        },
    ]
  it("should render correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Viewbar contents={contents}/>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render and have text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Viewbar  contents={contents}/>
      </BrowserRouter>
    );
    expect(getByText("Collection Types")).toBeInTheDocument();
  });
});
