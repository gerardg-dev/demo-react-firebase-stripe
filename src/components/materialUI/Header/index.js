// * To Fix
// Make showSearchBar toogle work, cause no matter if true/false, searchBar always show
// Add logic to toggle icon animation
// * To Add
// Be able to pass functions and data to be executed here, and return a result to parent
// Test on search and on click menu items, should return a callback, so parent can do what it wants onClick, or pass a url to go
// As we keep adding menu items, add an array that orders each item, pass as props order and it will reorder the position of every item.
// Every time we add new logic, check whats already in and leave it as default, this to not affect components who already making use of this
// * To Test
// Test we can pass all style and logic props

import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import {
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
  INSIDE_THE_HEADER
} from 'constants/app_starter/ActionTypes';
import SearchBox from "components/materialUI/SearchBox";
import MailNotification from "../MailNotification/index";
import AppNotification from "../AppNotification/index";
import CardHeader from "components/materialUI/dashboard/Common/CardHeader/index";
import { switchLanguage, toggleCollapsedNav } from "actions/app_starter/Setting";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/materialUI/LanguageSwitcher/index";
import Menu from "components/materialUI/TopNav/Menu";
import UserInfoPopup from "components/materialUI/UserInfo/UserInfoPopup";

class Header extends React.Component {
  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    });
  };
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    });
  };
  onLangSwitcherSelect = event => {
    this.setState({
      langSwitcher: !this.state.langSwitcher,
      anchorEl: event.currentTarget
    });
  };
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    });
  };
  onAppsSelect = () => {
    this.setState({
      apps: !this.state.apps
    });
  };
  onUserInfoSelect = () => {
    this.setState({
      userInfo: !this.state.userInfo
    });
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false,
      userInfo: false,
      mailNotification: false,
      appNotification: false,
      searchBox: false,
      apps: false
    });
  };
  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: "",
      mailNotification: false,
      userInfo: false,
      langSwitcher: false,
      appNotification: false
    };
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  Apps = (
    appsUlClassName,
    appsUlClassName2,
    appsLiClassName,
    appsLiClassName2,
    appsLinkClassName,
    appsLinkClassName2,
    appsIClassName,
    appsIClassName2,
    appsCalendarIClassName,
    appsCalendarIClassName2,
    appsCheckSquareIClassName,
    appsCheckSquareIClassName2,
    appsEmailIClassName,
    appsEmailIClassName2,
    appsCommentIClassName,
    appsCommentIClassName2,
    appsAccountIClassName,
    appsAccountIClassName2,
    appsPlusCircleIClassName,
    appsPlusCircleIClassName2,
    appSpanTextClassName,
    appSpanTextClassName2
  ) => {
    return (
      <ul className={`${appsUlClassName} ${appsUlClassName2}`}>
        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link
            className={`${appsLinkClassName} ${appsLinkClassName2}`}
            to="/app/calendar/basic"
          >
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsCalendarIClassName} ${appsCalendarIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              <IntlMessages id="sidebar.calendar.basic" />
            </span>
          </Link>
        </li>

        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link
            className={`${appsLinkClassName} ${appsLinkClassName2}`}
            to="/app/to-do"
          >
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsCheckSquareIClassName} ${appsCheckSquareIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              <IntlMessages id="sidebar.appModule.toDo" />
            </span>
          </Link>
        </li>

        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link
            className={`${appsLinkClassName} ${appsLinkClassName2}`}
            to="/app/mail"
          >
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsEmailIClassName} ${appsEmailIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              <IntlMessages id="sidebar.appModule.mail" />
            </span>
          </Link>
        </li>

        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link
            className={`${appsLinkClassName} ${appsLinkClassName2}`}
            to="/app/chat"
          >
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsCommentIClassName} ${appsCommentIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              <IntlMessages id="sidebar.appModule.chat" />
            </span>
          </Link>
        </li>

        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link
            className={`${appsLinkClassName} ${appsLinkClassName2}`}
            to="/app/contact"
          >
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsAccountIClassName} ${appsAccountIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              <IntlMessages id="sidebar.appModule.contact" />
            </span>
          </Link>
        </li>

        <li className={`${appsLiClassName} ${appsLiClassName2}`}>
          <Link className={`${appsLinkClassName} ${appsLinkClassName2}`} to="/">
            <i
              className={`${appsIClassName} ${appsIClassName2} ${appsPlusCircleIClassName} ${appsPlusCircleIClassName2}`}
            />
            <span
              className={`${appSpanTextClassName} ${appSpanTextClassName2}`}
            >
              Add New
            </span>
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    const {
      drawerType,
      locale,
      navigationStyle,
      horizontalNavPosition
    } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "d-block d-xl-none"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? "d-block"
      : "d-none";

    const {
      logoLinkTo,
      logoImgSrc,
      showLogo,
      showSearchBar,
      showDropdownSearchBar,
      showApps,
      showLanguages,
      showNotifications,
      showMessages,
      shouldAnimateNotificationsIcon,
      //
      appsUlClassName,
      appsUlClassName2,
      appsLiClassName,
      appsLiClassName2,
      appsLinkClassName,
      appsLinkClassName2,
      appsIClassName,
      appsIClassName2,
      appsCalendarIClassName,
      appsCalendarIClassName2,
      appsCheckSquareIClassName,
      appsCheckSquareIClassName2,
      appsEmailIClassName,
      appsEmailIClassName2,
      appsCommentIClassName,
      appsCommentIClassName2,
      appsAccountIClassName,
      appsAccountIClassName2,
      appsPlusCircleIClassName,
      appsPlusCircleIClassName2,
      appSpanTextClassName,
      appSpanTextClassName2,
      //
      appBarClassName,
      appBarClassName2,
      toolbarClassName,
      toolbarClassName2,
      menuIconContainerClassName,
      menuIconContainerClassName2,

      spanMenuIconClassName,
      spanMenuIconClassName2,

      iconButtonClassName,
      iconButtonClassName2,

      menuIconClassName,
      menuIconClassName2,

      logoLinkClassName,
      logoLinkClassName2,
      logoImgClassName,
      logoImgClassName2,

      searchBoxClassName,
      searchBoxClassName2,

      searchBoxFormClassName,
      searchBoxFormClassName2,
      searchBoxInputClassName,
      searchBoxInputClassName2,
      searchBoxButtonClassName,
      searchBoxButtonClassName2,
      searchBoxIconClassName,
      searchBoxIconClassName2,

      headerUlClassName,
      headerUlClassName2,

      headerLiClassName,
      headerLiClassName2,

      dropdownClassName,
      dropdownClassName2,
      dropdownToggleClassName,
      dropdownToggleClassName2,
      dropdownMenuClassName,
      dropdownMenuClassName2,
      cardHeaderClassName,
      cardHeaderClassName2,
      liIconButtonClassName,
      liIconButtonClassName2,
      liIButtonClassName,
      liIButtonClassName2,

      searchDropdownClassName,
      searchDropdownClassName2,

      headerEllipseClassName,
      headerEllipseClassName2
    } = this.props;

    return (
      <AppBar
        className={`${appBarClassName} ${appBarClassName2} ${
          navigationStyle === HORIZONTAL_NAVIGATION &&
          horizontalNavPosition === BELOW_THE_HEADER
            ? "app-main-header-top"
            : ""
        }`}
      >
        <Toolbar
          className={`${toolbarClassName} ${toolbarClassName2}`}
          disableGutters={false}
        >
          {navigationStyle === HORIZONTAL_NAVIGATION ? (
            <div
              className={`${menuIconContainerClassName} ${menuIconContainerClassName2}`}
              onClick={this.onToggleCollapsedNav}
            >
              <span
                className={`${spanMenuIconClassName} ${spanMenuIconClassName2}`}
              >
                <span
                  className={`${menuIconClassName} ${menuIconClassName2}`}
                />
              </span>
            </div>
          ) : (
            <IconButton
              className={`${iconButtonClassName} ${drawerStyle} ${iconButtonClassName2}`}
              aria-label="Menu"
              onClick={this.onToggleCollapsedNav}
            >
              <span className={`${menuIconClassName} ${menuIconClassName2}`} />
            </IconButton>
          )}

          {showLogo === true && (
            <Link
              className={`${logoLinkClassName} ${logoLinkClassName2}`}
              to={logoLinkTo}
            >
              <img
                src={require("assets/app_starter/images/logo.png")}
                alt="Jambo"
                title="Jambo"
                className={`${logoImgClassName} ${logoImgClassName2}`}
              />
            </Link>
          )}

          {showSearchBar === true && (
            <SearchBox
              // search box receives prop styleName and use this string in className
              // better said, styleName is a className
              styleName={`${searchBoxClassName} ${searchBoxClassName2}`}
              placeholder=""
              onChange={this.updateSearchText.bind(this)}
              value={this.state.searchText}
              //
              // containerClassName={searchBoxClassName}
              // containerClassName2={searchBoxClassName2}
              formClassName={searchBoxFormClassName}
              formClassName2={searchBoxFormClassName2}
              inputClassName={searchBoxInputClassName}
              inputClassName2={searchBoxInputClassName2}
              buttonClassName={searchBoxButtonClassName}
              buttonClassName2={searchBoxButtonClassName2}
              iconClassName={searchBoxIconClassName}
              iconClassName2={searchBoxIconClassName2}
            />
          )}
          {navigationStyle === HORIZONTAL_NAVIGATION &&
            horizontalNavPosition === INSIDE_THE_HEADER && <Menu />}

          <ul className={`${headerUlClassName} ${headerUlClassName2}`}>
            {/* APPS DROPDOWN */}{" "}
            {showApps === true && (
              <li className={`${headerLiClassName} ${headerLiClassName2}`}>
                <Dropdown
                  className={`${dropdownClassName} app-notification ${dropdownClassName2}`}
                  isOpen={this.state.apps}
                  toggle={this.onAppsSelect.bind(this)}
                >
                  <DropdownToggle
                    className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <span className="app-notification-menu">
                      <i className="zmdi zmdi-apps zmdi-hc-fw zmdi-hc-lg" />
                      <span>Apps</span>
                    </span>
                  </DropdownToggle>

                  <DropdownMenu>
                    {this.Apps(
                      appsUlClassName,
                      appsUlClassName2,
                      appsLiClassName,
                      appsLiClassName2,
                      appsLinkClassName,
                      appsLinkClassName2,
                      appsIClassName,
                      appsIClassName2,
                      appsCalendarIClassName,
                      appsCalendarIClassName2,
                      appsCheckSquareIClassName,
                      appsCheckSquareIClassName2,
                      appsEmailIClassName,
                      appsEmailIClassName2,
                      appsCommentIClassName,
                      appsCommentIClassName2,
                      appsAccountIClassName,
                      appsAccountIClassName2,
                      appsPlusCircleIClassName,
                      appsPlusCircleIClassName2,
                      appSpanTextClassName,
                      appSpanTextClassName2
                    )}
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
            {showDropdownSearchBar === true && (
              <li
                className={`d-inline-block d-lg-none ${headerLiClassName} ${headerLiClassName2}`}
              >
                <Dropdown
                  className={`${dropdownClassName} nav-searchbox ${dropdownClassName2}`}
                  isOpen={this.state.searchBox}
                  toggle={this.onSearchBoxSelect.bind(this)}
                >
                  <DropdownToggle
                    className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <IconButton
                      className={`${liIconButtonClassName} ${liIconButtonClassName2}`}
                    >
                      <i className="zmdi zmdi-search zmdi-hc-fw" />
                    </IconButton>
                  </DropdownToggle>

                  <DropdownMenu
                    right
                    className={`p-0 ${dropdownMenuClassName} ${dropdownMenuClassName2}`}
                  >
                    <SearchBox
                      styleName={`${searchDropdownClassName} ${searchDropdownClassName2}`}
                      placeholder=""
                      onChange={this.updateSearchText.bind(this)}
                      value={this.state.searchText}
                    />
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
            {/* LANGUAGE */}
            {showLanguages === true && (
              <li className={`${headerLiClassName} ${headerLiClassName2}`}>
                <Dropdown
                  className={`${dropdownClassName} ${dropdownClassName2}`}
                  isOpen={this.state.langSwitcher}
                  toggle={this.onLangSwitcherSelect.bind(this)}
                >
                  <DropdownToggle
                    className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <IconButton
                      className={`${liIconButtonClassName} ${liIconButtonClassName2}`}
                    >
                      <i className={`flag flag-24 flag-${locale.icon}`} />
                    </IconButton>
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    className={`w-50 ${dropdownMenuClassName} ${dropdownMenuClassName2}`}
                  >
                    <LanguageSwitcher
                      switchLanguage={this.props.switchLanguage}
                      handleRequestClose={this.handleRequestClose}
                    />
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
            {/* NOTIFICATIONS */}
            {showNotifications === true && (
              <li
                className={`${headerLiClassName} ${headerLiClassName2} app-tour`}
              >
                <Dropdown
                  className={`${dropdownClassName} ${dropdownClassName2}`}
                  isOpen={this.state.appNotification}
                  toggle={this.onAppNotificationSelect.bind(this)}
                >
                  <DropdownToggle
                    className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <IconButton
                      className={`${liIconButtonClassName} ${liIconButtonClassName2}`}
                    >
                      {/*
                      <i className="zmdi zmdi-notifications-none icon-alert animated infinite wobble" />
                      */}
                      <i
                        className={
                          shouldAnimateNotificationsIcon
                            ? "zmdi zmdi-notifications-none icon-alert animated infinite wobble"
                            : "zmdi zmdi-notifications-none icon-alert infinite wobble"
                        }
                      />
                    </IconButton>
                  </DropdownToggle>

                  <DropdownMenu right>
                    <CardHeader
                      styleName="align-items-center"
                      heading={<IntlMessages id="appNotification.title" />}
                    />
                    <AppNotification />
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
            {/* MAIL */}{" "}
            {showMessages === true && (
              <li
                className={`${headerLiClassName} ${headerLiClassName2} mail-tour`}
              >
                <Dropdown
                  className={`${dropdownClassName} ${dropdownClassName2}`}
                  isOpen={this.state.mailNotification}
                  toggle={this.onMailNotificationSelect.bind(this)}
                >
                  <DropdownToggle
                    className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <IconButton
                      className={`${liIconButtonClassName} ${liIconButtonClassName2}`}
                    >
                      <i className="zmdi zmdi-comment-alt-text zmdi-hc-fw" />
                    </IconButton>
                  </DropdownToggle>

                  <DropdownMenu right>
                    <CardHeader
                      styleName="align-items-center"
                      heading={<IntlMessages id="mailNotification.title" />}
                    />
                    <MailNotification />
                  </DropdownMenu>
                </Dropdown>
              </li>
            )}
            {/* navigationStyle === HORIZONTAL_NAVIGATION && () */}
            {showMessages === true &&
              navigationStyle === HORIZONTAL_NAVIGATION && (
                <li
                  className={`${headerLiClassName} ${headerLiClassName2} user-nav`}
                >
                  <Dropdown
                    className="quick-menu"
                    isOpen={this.state.userInfo}
                    toggle={this.onUserInfoSelect.bind(this)}
                  >
                    <DropdownToggle
                      className={`${dropdownToggleClassName} ${dropdownToggleClassName2}`}
                      tag="span"
                      data-toggle="dropdown"
                    >
                      <IconButton className="icon-btn size-30">
                        <Avatar
                          alt="..."
                          src={"https://via.placeholder.com/150x150"}
                          className="size-30"
                        />
                      </IconButton>
                    </DropdownToggle>

                    <DropdownMenu right>
                      <UserInfoPopup />
                    </DropdownMenu>
                  </Dropdown>
                </li>
              )}
          </ul>

          <div
            className={`${headerEllipseClassName} ${headerEllipseClassName2}`}
          ></div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const {
    drawerType,
    locale,
    navigationStyle,
    horizontalNavPosition
  } = settings;
  return { drawerType, locale, navigationStyle, horizontalNavPosition };
};

export default withRouter(
  connect(mapStateToProps, { toggleCollapsedNav, switchLanguage })(Header)
);

Header.defaultProps = {
  logoLinkTo: "/",
  logoImgSrc: "assets/app_starter/images/logo.png",
  showLogo: true,
  showSearchBar: true,
  showDropdownSearchBar: true,
  showApps: true,
  showLanguages: true,
  showNotifications: true,
  showMessages: true,
  shouldAnimateNotificationsIcon: true,
  //
  appsUlClassName: "jr-list jr-list-half",
  appsUlClassName2: "",
  appsLiClassName: "jr-list-item",
  appsLiClassName2: "",
  appsLinkClassName: "jr-list-link",
  appsLinkClassName2: "",
  appsIClassName: "",
  appsIClassName2: "",
  appsCalendarIClassName: "zmdi zmdi-calendar zmdi-hc-fw",
  appsCalendarIClassName2: "",
  appsCheckSquareIClassName: "zmdi zmdi-check-square zmdi-hc-fw",
  appsCheckSquareIClassName2: "",
  appsEmailIClassName: "zmdi zmdi-email zmdi-hc-fw",
  appsEmailIClassName2: "",
  appsCommentIClassName: "zmdi zmdi-comment zmdi-hc-fw",
  appsCommentIClassName2: "",
  appsAccountIClassName: "zmdi zmdi-account-box zmdi-hc-fw",
  appsAccountIClassName2: "",
  appsPlusCircleIClassName: "zmdi zmdi-plus-circle-o zmdi-hc-fw",
  appsPlusCircleIClassName2: "",
  appSpanTextClassName: "jr-list-text",
  appSpanTextClassName2: "",
  //
  appBarClassName: "app-main-header",
  appBarClassName2: "",
  toolbarClassName: "app-toolbar",
  toolbarClassName2: "",
  menuIconContainerClassName: "d-block d-md-none pointer mr-3",
  menuIconContainerClassName2: "",

  spanMenuIconClassName: "jr-menu-icon",
  spanMenuIconClassName2: "",

  iconButtonClassName: "jr-menu-icon mr-3",
  iconButtonClassName2: "",

  menuIconClassName: "menu-icon",
  menuIconClassName2: "",

  logoLinkClassName: "app-logo mr-2 d-none d-sm-block",
  logoLinkClassName2: "",
  logoImgClassName: "",
  logoImgClassName2: "",

  searchBoxClassName: "d-none d-lg-block",
  searchBoxClassName2: "",

  // searchBoxFormClassName: "",
  // searchBoxFormClassName2: "",
  // searchBoxInputClassName: "",
  // searchBoxInputClassName2: "",
  // searchBoxButtonClassName: "",
  // searchBoxButtonClassName2: "",
  // searchBoxIconClassName: "",
  // searchBoxIconClassName2: "",

  headerUlClassName: "header-notifications list-inline ml-auto",
  headerUlClassName2: "",

  headerLiClassName: "list-inline-item",
  headerLiClassName2: "",

  dropdownClassName: "quick-menu",
  dropdownClassName2: "",
  dropdownToggleClassName: "d-inline-block",
  dropdownToggleClassName2: "",
  dropdownMenuClassName: "",
  dropdownMenuClassName2: "",
  cardHeaderClassName: "align-items-center",
  cardHeaderClassName2: "",
  liIconButtonClassName: "icon-btn",
  liIconButtonClassName2: "",
  liIButtonClassName: "",
  liIButtonClassName2: "",

  searchDropdownClassName: "search-dropdown",
  searchDropdownClassName2: "",

  headerEllipseClassName: "ellipse-shape",
  headerEllipseClassName2: ""
};
