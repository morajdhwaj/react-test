import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React App Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const text2 = screen.getByText("Moraj");
  const title = screen.getByTitle("Test Logo");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

test("Testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "user");
  expect(checkInputPlaceholder).toBeInTheDocument();
});
