import React, { useState } from "react";
import { Link } from "react-router-dom";

import CloseIcon from '@material-ui/icons/Close';

import scssSidebarStyles from "./styles/scss/sidebar.scss";
import scssUtilityStyles from "./styles/scss/utility.scss";

import defaultStyles from "./styles/defaultStyles";
import defaultClassNames from "./styles/defaultClassNames";

const isObjectEmpty = obj => {
  if (obj === null || obj === undefined) return null;
  let ans =
    Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
  return ans;
};

const MenuItems = ({
	menuItems,
	onClick,
	style,
	addStyle,
	className,
	addClassName,
	selectedIndex
}) => {
	if (menuItems.length === 0) return null;

	let menuItemFormat = {
		id: "",
		text: "",
		onMenuItemClick: () => console.log("menuItem was clicked!"),
		sidebarLi: {
			style: {},
			addStyle: {},
			className: "",
			addClassName: ""
		},
		sidebarMenuItem: {
			style: {},
			addStyle: {},
			className: "",
			addClassName: ""
		},
	};

	return menuItems.map((menuItem, index) => {
		let formattedMenuItem = { ...menuItemFormat, ...menuItem };

		const isSidebarLiStyleEmpty = isObjectEmpty(
			formattedMenuItem.sidebarLi.style
		);
		const isSidebarMenuItemStyleEmpty = isObjectEmpty(
			formattedMenuItem.sidebarMenuItem.style
		);

		const sidebarLiStyle = isSidebarLiStyleEmpty
			? {
				...style.sidebarLi,
				...addStyle.sidebarLi,
				...formattedMenuItem.sidebarLi.addStyle
			}
			: formattedMenuItem.sidebarLi.style;

		const sidebarMenuItemStyle = isSidebarMenuItemStyleEmpty
			? {
				...style.sidebarMenuItem,
				...addStyle.sidebarMenuItem,
				...formattedMenuItem.sidebarMenuItem.addStyle
			}
			: formattedMenuItem.sidebarMenuItem.style;

		const sidebarLiClassName = formattedMenuItem.sidebarLi.className.length === 0
			? `${className.sidebarLi} ${addClassName.sidebarLi} ${formattedMenuItem.sidebarLi.addClassName}`
			: formattedMenuItem.sidebarLi.className;

		const sidebarMenuItemClassName = formattedMenuItem.sidebarMenuItem.className.length === 0
			? `${className.sidebarMenuItem} ${addClassName.sidebarMenuItem} ${formattedMenuItem.sidebarMenuItem.addClassName}`
			: formattedMenuItem.sidebarMenuItem.className;

		return (
			<div
				key={index}
				style={index === selectedIndex
					? {
						...sidebarLiStyle,
						...style.sidebarLiSelected,
						...addStyle.sidebarLiSelected
					}
					: sidebarLiStyle}
				className={index === selectedIndex
					? `${sidebarLiClassName} ${className.sidebarLiSelected} ${addClassName.sidebarLiSelected}`
					: sidebarLiClassName}
			>
				<Link
					style={index === selectedIndex
						? {
							...sidebarMenuItemStyle,
							...style.sidebarMenuItemSelected,
							...addStyle.sidebarMenuItemSelected
						}
						: sidebarMenuItemStyle}
					className={index === selectedIndex
						? `${sidebarMenuItemClassName} ${className.sidebarMenuItemSelected} ${addClassName.sidebarMenuItemSelected}`
						: sidebarMenuItemClassName}
					onClick={e => {
						e.preventDefault();
						// onClick(formattedMenuItem.onClick(formattedMenuItem.id));
						onClick({
							...{ index },
							...formattedMenuItem
						});
					}}
				>
					{formattedMenuItem.text}
				</Link>
			</div>
		)
	})
};

const Sidebar = props => {
  const { title, showBottomCloseBtn, onCloseBtnClick, menuItems, onMenuItemClick, selectedIndex } = props;
	const { style, addStyle, className, addClassName } = props;

  return (
		<div
			style={{
				...style.sidebarContainer,
				...addStyle.sidebarContainer
			}}
			className={`${className.sidebarContainer} ${addClassName.sidebarContainer}`}
		>
			<div
				style={{
					...style.sidebarTitleContainer,
					...addStyle.sidebarTitleContainer
				}}
				className={`${className.sidebarTitleContainer} ${addClassName.sidebarTitleContainer}`}
			>
        <div
					style={{
						...style.sidebarTitleText,
						...addStyle.sidebarTitleText
					}}
					className={`${className.sidebarTitleText} ${addClassName.sidebarTitleText}`}
				>
				  {title}
        </div>
			</div>
			<div
				style={{ ...style.sidebarMenu, ...addStyle.sidebarMenu }}
				className={`${className.sidebarMenu} ${addClassName.sidebarMenu}`}
			>
				<div
					style={{ ...style.sidebarUl, ...addStyle.sidebarUl }}
					className={`${className.sidebarUl} ${addClassName.sidebarUl}`}
				>

					<MenuItems
						menuItems={menuItems}
						onClick={onMenuItemClick}
						style={style}
						addStyle={addStyle}
						className={className}
						addClassName={addClassName}
						selectedIndex={selectedIndex}
					/>

					{showBottomCloseBtn === true && (
						<div
							style={{
								...style.sidebarCloseBtnContainer,
								...addStyle.sidebarCloseBtnContainer
							}}
							className={`${className.sidebarCloseBtnContainer} ${addClassName.sidebarCloseBtnContainer}`}
						>
							<Link
								style={{
									...style.sidebarCloseBtn,
									...addStyle.sidebarCloseBtn
								}}
								className={`${className.sidebarCloseBtn} ${addClassName.sidebarCloseBtn}`}
								onClick={onCloseBtnClick}
							>
								<CloseIcon color="inherit" fontSize="inherit" />
							</Link>
						</div>
					)}

				</div>
			</div>
		</div>
	);
};

Sidebar.defaultProps = {
	title: "TITLE",
	showBottomCloseBtn: false,
	onCloseBtnClick: () => console.log("Sidebar close btn clicked!"),
	menuItems: [],
	onMenuItemClick: () => console.log("Clicked!"),
	style: {},
	addStyle: {},
	className: {},
	addClassName: {},
	selectedIndex: null
};

export default Sidebar;
