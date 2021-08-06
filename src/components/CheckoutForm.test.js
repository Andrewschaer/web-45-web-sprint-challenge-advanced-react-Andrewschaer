import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
import MutationObserver from 'mutationobserver-shim';


// Write up the two tests here and make sure they are testing what the title shows

test("renders CheckoutForm without errors", () => {
    render(<CheckoutForm/>);
});

test("when a user fills out all fields and clicks checkout button, a success message appears below the form", () => {
    // Arrange!
    render(<CheckoutForm/>);
    const sampleFormData = {
        firstName: 'Firstname',
        lastName: 'Lastname',
        address: '1 Address Street',
        city: 'City',
        state: 'VT',
        zip: '00000'
    }

    // Act!
    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, sampleFormData.firstName);

    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, sampleFormData.lastName);

    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, sampleFormData.address);

    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, sampleFormData.city);

    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, sampleFormData.state);

    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, sampleFormData.zip);
    
    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    // Assert!
    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
});
