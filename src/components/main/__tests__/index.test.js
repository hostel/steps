import { render, screen, fireEvent } from "@testing-library/react";

import { Main } from "@components/main";

test("should render default active step (first step)", () => {
  render(<Main />);

  const activeStep = screen.getByRole("button", { pressed: true });

  expect(activeStep).toMatchSnapshot();
});

test("should render first step (b/c clicked last element)", () => {
  render(<Main />);

  const steps = screen.getAllByRole("button", { pressed: false });

  const lastStep = steps[steps.length - 1];

  fireEvent.click(lastStep);

  const activeSteps = screen.getAllByRole("button", { pressed: true });

  expect(activeSteps).toMatchSnapshot();
});

test("should render first and second steps", () => {
  render(<Main />);

  const steps = screen.getAllByRole("button", { pressed: false });

  const secondStep = steps[0];

  fireEvent.click(secondStep);

  const activeSteps = screen.getAllByRole("button", { pressed: true });

  expect(activeSteps).toMatchSnapshot();
});
