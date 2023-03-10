import { BrowserRouter } from "react-router-dom";
import Dashboard from "..";
import { render } from "@testing-library/react";

describe("Dashboard", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<BrowserRouter> <Dashboard /></BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render and have text", () => {
    const { getByText } = render(<BrowserRouter> <Dashboard /></BrowserRouter>);
    expect(getByText("+ New Type")).toBeInTheDocument();
  })

  
});
