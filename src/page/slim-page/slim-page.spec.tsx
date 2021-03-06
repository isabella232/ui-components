import React from "react";
import { CommonSwitch } from "../../common-switch";
import { SlimPage } from "./slim-page";
import { TestWrapper } from "../../test-utils";
import { cleanup, fireEvent, render } from "@testing-library/react";

afterEach(cleanup);

const TestCommonPage = (props: any) => {
  return (
    <TestWrapper>
      <SlimPage
        title="Test Card"
        subtitle="This is a subtitle"
        primaryActions={[
          {
            content: "Test Action",
          },
          {
            Component: CommonSwitch,
            label: "Test",
            onClick: () => {},
          },
        ]}
        {...props}
      >
        Some content here.
      </SlimPage>
    </TestWrapper>
  );
};

test("renders common page", () => {
  const { rerender, container, getByTestId, queryByTestId } = render(
    <TestCommonPage />,
  );
  rerender(
    <TestCommonPage
      secondaryActions={[
        {
          "data-testid": "secondary-action",
          onClick: () => {},
          content: "CUSTOM ACTION",
        },
      ]}
    />,
  );
  expect(container).toMatchSnapshot();
  expect(queryByTestId("secondary-action")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("dropdown-button"));
  expect(getByTestId("secondary-action")).toBeInTheDocument();
});

test("common page classes", () => {
  const { getByTestId } = render(
    <TestCommonPage
      classes={{
        root: "test-root",
        header: "test-header",
        headerActions: "test-header-actions",
        primaryActions: "test-primary-actions",
        secondaryActions: "test-secondary-actions",
        titleContainer: "test-title-container",
        title: "test-title",
        subtitle: "test-subtitle",
        content: "test-content",
      }}
    />,
  );
  const classes = {
    "common-page": "test-root",
    "common-page-header": "test-header",
    "common-page-header-actions": "test-header-actions",
    "common-page-primary-actions": "test-primary-actions",
    "common-page-title-container": "test-title-container",
    "common-page-title": "test-title",
    "common-page-subtitle": "test-subtitle",
    "common-page-content": "test-content",
  };
  Object.keys(classes).forEach((key) => {
    expect(getByTestId(key)).toBeInTheDocument();
    expect(getByTestId(key)).toHaveClass(classes[key]);
  });
});
