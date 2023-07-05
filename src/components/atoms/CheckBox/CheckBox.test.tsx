import React from "react";
import { render, screen } from "@testing-library/react";
import CheckBox from ".";

test("Renders CheckBox component", () => {
	render(<CheckBox checked={false} onChange={() => jest.fn()} label={""} />);
	const element = screen.getByTestId("checkbox");
	expect(element).toBeInTheDocument();
});
