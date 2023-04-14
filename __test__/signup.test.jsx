import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

import Signup from "@/components/Signup";

describe("Signup", () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
  });

  it("Renders a heading", () => {
    const titleValue = screen.getByRole("heading", {
      name: "Patient Registration",
    });
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveTextContent(/Patient Registration/i);
  });

  it("All element should get rendered", () => {
    const inputName = screen.getByPlaceholderText("Patient Name");
    expect(inputName).toHaveAttribute("placeholder", "Patient Name");

    const inputPhoneNumber = screen.getByPlaceholderText("Phone Number");
    expect(inputPhoneNumber).toHaveAttribute("placeholder", "Phone Number");

    const ageInput = screen.getByPlaceholderText("Patient Age");
    expect(ageInput).toHaveAttribute("placeholder", "Patient Age");

    const emailInput = screen.getByPlaceholderText("Email Address");
    expect(emailInput).toHaveAttribute("placeholder", "Email Address");

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toHaveAttribute("placeholder", "Password");

    const countryInput = screen.getByPlaceholderText("Select Country");
    expect(countryInput).toHaveAttribute("placeholder", "Select Country");
  });

  it("Signup button should get rendered", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Signup form with 1 button should be rendered", async () => {
    const buttonElement = await screen.findAllByRole("button");
    expect(buttonElement).toHaveLength(1);
  });

  it("Intially all input element should be empty", () => {
    const patientName = screen.getByPlaceholderText("Patient Name");
    expect(patientName.value).toBe("");

    const phoneNo = screen.getByPlaceholderText("Phone Number");
    expect(phoneNo.value).toBe("");

    const age = screen.getByPlaceholderText("Patient Age");
    expect(age.value).toBe("");

    const email = screen.getByPlaceholderText("Email Address");
    expect(email.value).toBe("");

    const password = screen.getByPlaceholderText("Password");
    expect(password.value).toBe("");

    const country = screen.getByPlaceholderText("Select Country");
    expect(country.value).toBe("");
  });

  it("Signup button should be disabled", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("Patient name input should change", () => {
    const patientName = screen.getByPlaceholderText("Patient Name");
    const testValue = "Utkarsh Mishra";
    fireEvent.change(patientName, { target: { value: testValue } });
    expect(patientName.value).toBe(testValue);
  });

  it("Phone number input should change", () => {
    const phoneNumber = screen.getByPlaceholderText("Phone Number");
    const testValue = "8175496525";
    fireEvent.change(phoneNumber, { target: { value: testValue } });
    expect(phoneNumber.value).toBe(testValue);
  });

  it("Patient age input should change", () => {
    const patientAge = screen.getByPlaceholderText("Patient Age");
    const testValue = "25";
    fireEvent.change(patientAge, { target: { value: testValue } });
    expect(patientAge.value).toBe(testValue);
  });

  it("Email address input should change", () => {
    const emailAddress = screen.getByPlaceholderText("Email Address");
    const testValue = "utkarsh@gmail.com";
    fireEvent.change(emailAddress, { target: { value: testValue } });
    expect(emailAddress.value).toBe(testValue);
  });

  it("Password input should change", () => {
    const password = screen.getByPlaceholderText("Password");
    const testValue = "Akash@#!$%";
    fireEvent.change(password, { target: { value: testValue } });
    expect(password.value).toBe(testValue);
  });

  it("Should correctly set default option", () => {
    expect(
      screen.getByRole("option", { name: "Select Country" }).selected
    ).toBe(true);
  });
});
