// @flow
import React from "react";
import { render } from "react-testing-library";
import { TestWrapper } from "@grail/components/src/utils";
import { Selector } from "./index";
import "jest-dom/extend-expect";

test("render selector", async () => {
	const selectorData = [
		{ key: "testKey1", text: "test text 1" },
		{ key: "testKey2", text: "test text 2" },
		{ key: "testKey3", text: "test text 3" },
	];
	const { container, getByTestId } = render(
		<TestWrapper>
			<Selector
				name="test-selector"
				data={selectorData}
				showError={true}
				helperText="test helper text"
				value="testKey1"
			/>
		</TestWrapper>,
	);
	expect(getByTestId("selector-value")).toHaveTextContent("test text 1");
	expect(container).toMatchSnapshot();
});

test("render selector without selected value", async () => {
	const selectorData = [
		{ key: "testKey1", text: "test text 1" },
		{ key: "testKey2", text: "test text 2" },
		{ key: "testKey3", text: "test text 3" },
	];
	const { container, getByTestId } = render(
		<TestWrapper>
			<Selector
				name="test-selector"
				data={selectorData}
				value="" />
		</TestWrapper>,
	);
	expect(getByTestId("selector-value")).toHaveTextContent("Select");
	expect(container).toMatchSnapshot();
});

test("render selector with readonly", async () => {
	const selectorData = [
		{ key: "testKey1", text: "test text 1" },
		{ key: "testKey2", text: "test text 2" },
		{ key: "testKey3", text: "test text 3" },
	];
	const { container, getByTestId } = render(
		<TestWrapper>
			<Selector
				name="test-selector"
				readOnly
				data={selectorData}
				value="testKey1" />
		</TestWrapper>,
	);
	expect(getByTestId("readonly-text-field")).toHaveTextContent("test text 1");
	expect(container).toMatchSnapshot();
});

test("render selector with empty selector data", async () => {
	const selectorData = [];
	const { container, getByTestId } = render(
		<TestWrapper>
			<Selector
				name="test-selector"
				data={selectorData}
				value="" />
		</TestWrapper>,
	);
	expect(getByTestId("readonly-text-field")).toHaveTextContent("Nothing to select");
	expect(container).toMatchSnapshot();
});
