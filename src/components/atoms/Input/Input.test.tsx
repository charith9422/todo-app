import React from "react";
import { render, screen } from "@testing-library/react";
import Input from ".";

test("Renders Input component", () => {
	render(<Input onChange={() => jest.fn()} value={""} />);
	const element = screen.getByTestId("input");
	expect(element).toBeInTheDocument();
});
