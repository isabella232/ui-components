import { ButtonProps } from "@material-ui/core/Button";
import React from "react";
import { ExportableColumn } from "@grailbio/lib";
import { PagedTableColumn } from "../types/paged-table";
declare type Props = {
    columns: Array<ExportableColumn<any> | PagedTableColumn<any>>;
    visibleRows?: Record<string, any>[];
    selectedRows?: Record<string, any>[];
    fetchBulkExportRows?: () => Promise<Record<string, any>[]>;
    filenamePrefix?: string;
    buttonProps?: Partial<ButtonProps>;
    className?: string;
};
export declare const ExportButton: React.FC<Props>;
export {};
