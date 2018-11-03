// @flow
import "jest-dom/extend-expect";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { EDC, LIMS, PIPELINE } from "@grail/lib";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./navbar";
import { TestWrapper } from "../utils";
import { bindElementToQueries } from "dom-testing-library";
import { cleanup, fireEvent, render } from "react-testing-library";

afterEach(cleanup);

const bodyUtils = bindElementToQueries(document.body);

const wrapText = text => {
  return <Typography>{text}</Typography>;
};

test("render Sidebar", () => {
  render(
    <TestWrapper>
      <MemoryRouter>
        <Navbar
          domain={LIMS}
          currentPath="/automation/tasks"
          title={wrapText("title")}
          breadcrumbs={wrapText("breadcrumbs")}
          left={wrapText("left")}
          center={wrapText("center")}
          right={wrapText("right")}
          sidebarFooter={wrapText("sidebarFooter")}
          externalDomains={new Map()
            .set(EDC, "https://edc-client-staging.eng.aws.grail.com")
            .set(PIPELINE, "https://proxy.ti-apps.aws.grail.com/pipeline-analyse-ui")}
        />
      </MemoryRouter>
    </TestWrapper>,
  );
  expect(bodyUtils.queryByText("title")).toBeInTheDocument();
  expect(bodyUtils.queryByText("breadcrumbs")).toBeInTheDocument();
  expect(bodyUtils.queryByText("left")).toBeInTheDocument();
  expect(bodyUtils.queryByText("center")).toBeInTheDocument();
  expect(bodyUtils.queryByText("right")).toBeInTheDocument();
  const hamburger = bodyUtils.queryByTestId("main-nav-button");
  fireEvent.click(hamburger);
  expect(bodyUtils.queryByText("sidebarFooter")).toBeInTheDocument();
});
