import { BrowserRouter } from "react-router-dom";
import DashboardDetails from "..";
import { render, waitFor } from "@testing-library/react";

describe("DashboardDetails", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<BrowserRouter> <DashboardDetails /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    })
    it("should render and have text", async() => {
        const { getByText } = render(<BrowserRouter> <DashboardDetails /></BrowserRouter>);
        expect(getByText("loading")).toBeInTheDocument();
    })
})