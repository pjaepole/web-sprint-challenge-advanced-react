import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows
test("renders without errors", () => {
    render(<CheckoutForm/>);
    const header =screen.getByText(/checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm></CheckoutForm>);
    const firstName=screen.getByLabelText(/First Name:/i)
    const lastName=screen.getByLabelText(/Last Name:/i)
    const address=screen.getByLabelText(/Address:/i)
    const city=screen.getByLabelText(/City:/i)
    const state=screen.getByLabelText(/State:/i)
    const zip=screen.getByLabelText(/Zip:/i)
    const submitButton=document.querySelector('button')

    userEvent.type(firstName,'jae')
    userEvent.type(lastName,'park')
    userEvent.type(address,'kameHouse')
    userEvent.type(city,'z city')
    userEvent.type(state,'idk')
    userEvent.type(zip,'12345')
    userEvent.click(submitButton)

    const successMsg=document.querySelector('[data-testid="successMessage"]')

    // expect(successMsg).toHaveTextContent(/simpson/)//just testing it to break to see if its working
    expect(successMsg).toHaveTextContent(/jae/)
    expect(successMsg).toHaveTextContent(/park/)
    expect(successMsg).toHaveTextContent(/z city/)
    expect(successMsg).toHaveTextContent(/idk/)
    expect(successMsg).toHaveTextContent(/12345/)
    expect(successMsg).toHaveTextContent(/kameHouse/)

});
