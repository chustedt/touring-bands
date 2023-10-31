import React from "react";
import { render, screen } from "@testing-library/react";
import Band from "./Band";
import {
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";
import skaBand from "../band-json/ska-band.json";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: jest.fn(),
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Band />,
  },
]);

describe("Band Component", () => {
  beforeEach(() => {
    useLoaderData.mockReturnValue({
      band: skaBand,
    });
  });

  test("renders Band component", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(skaBand.name)).toBeInTheDocument();
  });

  test("renders band image with correct attributes", () => {
    render(<RouterProvider router={router} />);
    const bandImage = screen.getByAltText(`Album cover for ${skaBand.name}`);
    expect(bandImage).toBeInTheDocument();
    expect(bandImage).toHaveAttribute("src", skaBand.imgUrl);
  });

  test("displays total ticket price when user selects a ticket quantity", () => {
    render(<RouterProvider router={router} />);
    const ticketQuantity = screen.getByLabelText("Quantity of VIP tickets");
    expect(ticketQuantity).toBeInTheDocument();
    expect(screen.getByText("$0")).toBeInTheDocument();
    ticketQuantity.value = 2;
    ticketQuantity.dispatchEvent(new Event("change"));
    expect(screen.getByText("$300")).toBeInTheDocument();
  });

  // Using react-testing-library I would test the remaining functionality of the band component where I pretend to be a user
  // and interact with the page. I would test that the user can enter personal details, payment details, and submit the form.
  // It would also be beneficial to ensure that the form validation is working as expected.
});
