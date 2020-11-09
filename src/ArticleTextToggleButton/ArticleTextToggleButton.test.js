import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton texts", () => {
	it("renders correctly", () => {
		const { container } = render(<ArticleTextToggleButton buttonText={"Show more"} />);
		expect(container).toMatchSnapshot();
	});

	it("renders correctly after button is clicked", () => {
		const { container, getByText } = render(<ArticleTextToggleButton buttonText={"Show more"} />);

		const showMoreButton = getByText("Show more");
		fireEvent.click(showMoreButton);
		expect(container).toMatchSnapshot();

		const showLessButton = getByText("Show less");
		fireEvent.click(showLessButton);
		expect(container).toMatchSnapshot();
	});
}); 