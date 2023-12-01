import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders training react page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to My training page/i);
  expect(linkElement).toBeInTheDocument();
});
