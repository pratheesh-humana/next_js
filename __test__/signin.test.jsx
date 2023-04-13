import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Signin from "@/components/Signin";

describe("Signin", () => {
  beforeEach(() => {
    render(<Signin />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: "Login",
    });

    expect(heading).toBeInTheDocument();
  });

  it("email input should be rendered", () => {
    const emailInput = screen.getByPlaceholderText("Email Address");
    expect(emailInput).toHaveAttribute("placeholder", "Email Address");
  });

  it("password input should be rendered", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toHaveAttribute("placeholder", "Password");
  });

  it("button input should be rendered", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("login form with 1 button should be rendered", async () => {
    const buttonElement = await screen.findAllByRole("button");
    expect(buttonElement).toHaveLength(1);
  });

  it("Intially email input should be empty", () => {
    const emailInput = screen.getByPlaceholderText("Email Address");
    expect(emailInput.value).toBe("");
  });

  it("Intially password input should be empty", () => {
    const passwordInput = screen.getByPlaceholderText("Email Address");
    expect(passwordInput.value).toBe("");
  });

  it("button should be disabled", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("email input should change", () => {
    const emailInput = screen.getByPlaceholderText("Email Address");

    const testValue = "utkarsh@gmail.com";
    fireEvent.change(emailInput, { target: { value: testValue } });

    expect(emailInput.value).toBe(testValue);
  });

  it("password input should change", () => {
    const passwordInput = screen.getByPlaceholderText("Password");

    const testValue = "Akash@63517";
    fireEvent.change(passwordInput, { target: { value: testValue } });

    expect(passwordInput.value).toBe(testValue);
  });

  it("button should not be disabled when inputs exists", () => {
    const buttonElement = screen.getByRole("button");

    const emailInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Password");

    const testEmailValue = "utkarsh@gmail.com";
    const testPasswordValue = "Akash@123";

    fireEvent.change(emailInput, { target: { value: testEmailValue } });
    fireEvent.change(passwordInput, { target: { value: testPasswordValue } });
    expect(buttonElement).not.toBeDisabled();
  });
});
