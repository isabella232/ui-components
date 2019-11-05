import React from "react";

import TablePagination from "@material-ui/core/TablePagination";
import styles from "../table.module.scss";
import { PaginationProps } from "../../types/paged-table";

type Props = {
  paginationProps: PaginationProps;
};

export const TablePager: React.FC<Props> = props => {
  const {
    onPageChange,
    onSelect,
    rowCount,
    tableOptions,
  } = props.paginationProps;
  if (!tableOptions) {
    throw new Error(
      "tableOptions prop with count and offset must be included for pagination",
    );
  }
  const { offset, count, totalCount } = tableOptions;
  // const invalidPaginationParameters = typeof count !== "number" || typeof offset !== "number";
  const invalidPaginationParameters = count == null || offset == null;
  if (invalidPaginationParameters) {
    throw new Error(
      "count or offset or both are either not valid or non existent",
    );
  }

  const page = Math.floor(offset / count) || 0;
  const startingCount = Math.max(rowCount - count, count * page);
  const fillsPage = rowCount >= count;
  const estimatedTotalCount = startingCount + rowCount + (fillsPage ? 1 : 0);

  const setPage = ({ offset, count }: { offset: number; count: number }) => {
    onSelect && onSelect([]);
    onPageChange && onPageChange({ offset, count: count || 10 });
  };

  const onChangePage = (
    _: React.MouseEvent<HTMLInputElement> | null,
    page: number,
  ) => {
    const newOffset = page * count;
    setPage({ offset: newOffset, count });
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Math.max(1, Number(event.target.value));
    const newOffset = Math.floor(offset / newCount) * newCount;
    return setPage({ offset: newOffset, count: newCount });
  };

  return (
    // @ts-ignore: no overload matches this call.
    <TablePagination
      component="div"
      className={`table-pager ${styles.tablePager}`}
      count={totalCount || estimatedTotalCount}
      labelDisplayedRows={({ from, to }) =>
        `Showing ${from} to ${to}${totalCount ? ` of ${totalCount}` : ""}`
      }
      rowsPerPage={count}
      page={page}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      backIconButtonProps={{
        className: "previous-page",
        "data-testid": "previous-page",
      }}
      nextIconButtonProps={{
        className: "next-page",
        "data-testid": "next-page",
      }}
      SelectProps={{
        id: "rows-per-page",
        "data-testid": "rows-per-page",
        className: `select-row-count ${styles.selectRowCount}`,
      }}
    />
  );
};

// TODO(jsingh/nsawas) - need a better way to enable/disable pagination. Don't know length of results.
// total count is faked, since *usually* we pass in `data` representing a single page
// need to give a longer number to enable pagination
// checking % count only works if data represents a window (extra keys may be present but not visible)