import React from "react";
import { render, screen } from "@testing-library/react";
import CardItem from ".";

test("Renders CardItem component", () => {
	render(<CardItem id={0} title={""} onChangeDone={() => jest.fn()} />);
	const element = screen.getByTestId("card-item");
	expect(element).toBeInTheDocument();
});
