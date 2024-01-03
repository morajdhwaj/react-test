import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React App Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const text2 = screen.getByText("Moraj");
  const title = screen.getByTitle("Test Logo");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
