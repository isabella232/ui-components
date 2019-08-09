// @flow
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { GrailLogo } from ".";
import { TestWrapper } from "../../test-utils";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

[undefined, "white", "purple", "gold"].forEach(color => {
  test(`render ${color || "default (white)"} GrailLogo`, () => {
    const { container } = render(
      <TestWrapper>
        <GrailLogo color={color} />
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
