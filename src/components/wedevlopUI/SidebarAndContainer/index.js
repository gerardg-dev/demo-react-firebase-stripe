import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Sidebar from "./sidebar";

import scssContainerStyles from "./styles/scss/container.scss";
import scssUtilityStyles from "./styles/scss/utility.scss";

import defaultStyles from "./styles/defaultStyles";
import defaultClassNames from "./styles/defaultClassNames";

class SidebarAndContainer extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			showSidebarAbs: false,
			selectedIndex: props.selectedIndex,
			// "dj_profile"
			// "playlist_categories"
			// "dj_playlists"
			// "dj_mixes"
			// "dj_albums"
			// "dj_tracks"
			// "page_settings"
			//
			// Merging default styling with the styling props
			style: { ...defaultStyles.style, ...props.style },
      addStyle: { ...defaultStyles.addStyle, ...props.addStyle },
      className: { ...defaultClassNames.className, ...props.className },
      addClassName: {
        ...defaultClassNames.addClassName,
        ...props.addClassName
      }
		};
  };

	componentDidMount() {
	}

	componentDidUpdate() {
	}

	render() {
		const { showSidebarAbs } = this.state;

		const {
			selectedIndex,
			menuItems,
			onMenuItemClick,
			children
		} = this.props;

		const {
			style,
			addStyle,
			className,
			addClassName
		} = this.state;

		let sidebarAbsHideClass = showSidebarAbs
			? ""
			: "wedevlopUI-sidebar-utility__display--none";

		return (
			<div
				// className="wedevlopUI-sidebar-main__container"
				style={{ ...style.mainContainer, ...addStyle.mainContainer }}
				className={`${className.mainContainer} ${addClassName.mainContainer}`}
			>
				<div
					// className="wedevlopUI-sidebar-main__container--btn-toggle-sidebar"
					style={{ ...style.toggleBtnContainer, ...addStyle.toggleBtnContainer }}
					className={`${className.toggleBtnContainer} ${addClassName.toggleBtnContainer}`}
				>
					<Link
						// className="wedevlopUI-sidebar-main__btn--toggle-sidebar"
						style={{ ...style.toggleBtn, ...addStyle.toggleBtn }}
						className={`${className.toggleBtn} ${addClassName.toggleBtn}`}
						onClick={e => {
							e.preventDefault();
							this.setState({ showSidebarAbs: showSidebarAbs ? false : true });
						}}
						to=""
					>
						<MenuIcon color="inherit" fontSize="inherit" />
					</Link>
				</div>
				<div
					// className="wedevlopUI-sidebar-main__container--sidebar"
					style={{ ...style.leftContainer, ...addStyle.leftContainer }}
					className={`${className.leftContainer} ${addClassName.leftContainer}`}
				>
					<Sidebar
						menuItems={menuItems}
						selectedIndex={this.state.selectedIndex}
						style={style}
						addStyle={addStyle}
						className={className}
						addClassName={addClassName}
						onMenuItemClick={menuItem => {
							console.log("MenuItem click and container, item is");
							console.log(menuItem);
							this.setState({
								selectedIndex: menuItem.index,
								showSidebarAbs: false
								// showSidebarAbs: showSidebarAbs ? false : true
							});
							onMenuItemClick(menuItem);
						}}
						showBottomCloseBtn={false}
					/>
				</div>
				<div
					// className={`wedevlopUI-sidebar-main__container--sidebar-abs-shadow ${sidebarAbsHideClass}`}
					style={{ ...style.shadow, ...addStyle.shadow }}
					className={`${className.shadow} ${sidebarAbsHideClass} ${addClassName.shadow}`}
					onClick={() => {
						this.setState({ showSidebarAbs: false });
					}}
				/>
				{showSidebarAbs === true && (
					<div
						// className={`wedevlopUI-sidebar-main__container--sidebar-abs ${sidebarAbsHideClass}`}
						style={{ ...style.absSidebar, ...addStyle.absSidebar }}
						className={`${className.absSidebar} ${sidebarAbsHideClass} ${addClassName.absSidebar}`}
					>
						<Sidebar
							menuItems={menuItems}
							selectedIndex={this.state.selectedIndex}
							style={style}
							addStyle={addStyle}
							className={className}
							addClassName={addClassName}
							onMenuItemClick={menuItem => {
								console.log("MenuItem click and container, item is");
								console.log(menuItem);
								this.setState({
									selectedIndex: menuItem.index,
									showSidebarAbs: false
									// showSidebarAbs: showSidebarAbs ? false : true
								});
								onMenuItemClick(menuItem);
							}}
							showBottomCloseBtn={true}
							onCloseBtnClick={(e) => {
								e.preventDefault();
								this.setState({
									showSidebarAbs: showSidebarAbs ? false : true
								});
							}}
						/>
					</div>
				)}
				<div
					// className="wedevlopUI-sidebar-main__container--content"
					style={{ ...style.contentContainer, ...addStyle.contentContainer }}
					className={`${className.contentContainer} ${addClassName.contentContainer}`}
				>
					{children}
				</div>
			</div>
		);
	}
};

SidebarAndContainer.defaultProps = {
	selectedIndex: null,
	menuItems: [],
	onMenuItemClick: () => console.log("MenuItem Clicked!"),
	style: {},
	addStyle: {},
	className: {},
	addClassName: {}
};

export default SidebarAndContainer;
