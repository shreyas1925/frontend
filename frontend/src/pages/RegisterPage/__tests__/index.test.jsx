import RegisterPage from "..";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("RegisterPage", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("should render and have text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
    expect(getByText("Register")).toBeInTheDocument();
  });
});
