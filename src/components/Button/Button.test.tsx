// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import { Button } from "./Button";

// describe("Button component", () => {
//   test("renders button correctly", () => {
//     const { getByText } = render(<Button label="Click me" />);
//     const buttonElement = getByText("Click me");
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement.tagName).toBe("BUTTON");
//   });

//   test("calls onClick handler when clicked", () => {
//     const onClickMock = jest.fn();
//     const { getByText } = render(
//       <Button label="Click me" onClick={onClickMock} />
//     );
//     const buttonElement = getByText("Click me");
//     fireEvent.click(buttonElement);
//     expect(onClickMock).toHaveBeenCalled();
//   });

//   test("renders disabled button correctly", () => {
//     const { getByText } = render(<Button label="Disabled" disabled />);
//     const buttonElement = getByText("Disabled");
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement.tagName).toBe("BUTTON");
//     expect(buttonElement).toBeDisabled();
//   });
// });
