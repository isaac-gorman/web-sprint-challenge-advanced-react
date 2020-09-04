import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  // STEP 1) Get inputs
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  // STEP 2) Enter data into the inputs using fireEvent
  fireEvent.change(firstNameInput, { target: { value: "Isaac" } });
  fireEvent.change(lastNameInput, { target: { value: "Gorman" } });
  fireEvent.change(addressInput, {
    target: { value: "1400 Rio Grande St, APT# 105" },
  });
  fireEvent.change(cityInput, { target: { value: "Austin" } });
  fireEvent.change(stateInput, { target: { value: "Texas" } });
  fireEvent.change(zipInput, { target: { value: "78701" } });

  // STEP 3) Grab the button using getByRole
  const submitButton = screen.getByRole("button");

  // STEP 4) initiate submit
  fireEvent.click(submitButton);

  // STEP 5) find result using find by testId
  const result = await screen.findByTestId("successMessage");

  // STEP 6) write assertion
  expect(result).toBeInTheDocument();
});
