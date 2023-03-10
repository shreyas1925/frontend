import { LoginPage } from "../..";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("LoginPage", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<BrowserRouter><LoginPage /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    })
    it("should render and have text", () => {
        const { getByText } = render(<BrowserRouter><LoginPage /></BrowserRouter>);
        expect(getByText("Login")).toBeInTheDocument();
    })
})