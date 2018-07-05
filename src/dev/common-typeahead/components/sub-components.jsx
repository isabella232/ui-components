// @flow
import React, { type Node } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClearIcon from "@material-ui/icons/Clear";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";

type Props = {
	children: Node,
	data: Suggestion,
	isFocused: boolean,
	isSelected: boolean,
	onFocus: Function,
	selectOption: (Suggestion, SyntheticEvent<*>) => any,
};

type MultiValueContainerProps = {
	children: Node,
};

type ClearIndicatorProps = {
	innerProps: Object,
};

type DropdownProps = {
	selectProps: SelectProps,
};

export const DropdownIndicator = (props: DropdownProps) => {
	const {
		selectProps: { menuIsOpen },
	} = props;
	return (
		<div className="common-typeahead__dropdown-arrow">{menuIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
	);
};

export const NoOptionsMessage = () => {
	return <MenuItem selected={false}>No results found</MenuItem>;
};

export const ClearIndicator = (props: ClearIndicatorProps) => {
	const { innerProps } = props;
	return <ClearIcon
		className="common-typeahead__clear-icon"
		{...innerProps} />;
};

export const MultiValueContainer = (props: MultiValueContainerProps) => {
	const { children } = props;
	return (
		<Chip
			tabIndex={-1}
			label={children}
			classes={{
				root: "common-typeahead__chip-root",
				label: "common-typeahead__chip-label",
			}}
		/>
	);
};

export const MultiValueRemove = (props: Props) => {
	return <CancelIcon {...props} />;
};

export const Option = (props: Props) => {
	const { children, data, isFocused, isSelected, onFocus, selectOption } = props;
	const handleClick = event => {
		selectOption(data, event);
	};
	return (
		<MenuItem
			component="div"
			className={`common-typeahead__menu-item${isSelected ? "-selected" : ""}`}
			onFocus={onFocus}
			selected={isFocused}
			onClick={handleClick}
		>
			{children}
		</MenuItem>
	);
};
