import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".";

test("Renders Card component", () => {
	render(<Card />);
	const element = screen.getByTestId("card");
	expect(element).toBeInTheDocument();
});
