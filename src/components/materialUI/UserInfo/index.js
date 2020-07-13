import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { userSignOut } from "actions/app_starter/Auth";
import IntlMessages from "util/IntlMessages";

import { styled } from "@material-ui/core/styles";

const MyAvatar = props => {
  const { alt, src } = props;
  const { avatarStyles, avatarStyles2 } = props;
  const StyledAvatar = styled(Avatar)({
    ...avatarStyles,
    ...avatarStyles2
  });
  return <StyledAvatar alt={alt} src={src} />;
};

class UserInfo extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      //
      username,
      avatarAlt,
      avatarSrc,
      //
      profileURL,
      settingsURL,
      signoutURL,
      //
      profileIntlMsgID,
      settingsIntlMsgID,
      signoutIntlMsgID,
      //
      mainContainerClassName,
      mainContainerClassName2,
      avatarClassName,
      avatarClassName2,
      avatarStyles,
      avatarStyles2,
      userDetailClassName,
      userDetailClassName2,
      userNameTxtClassName,
      userNameTxtClassName2,
      userDropdownIconClassName,
      userDropdownIconClassName2,
      userInfoMenuClassName,
      userInfoMenuClassName2,
      menuStyles,
      menuStyles2,
      menuItemClassName,
      menuItemClassName2,
      accountIconClassName,
      accountIconClassName2,
      settingsIconClassName,
      settingsIconClassName2,
      signinIconClassName,
      signinIconClassName2
    } = this.props;
    return (
      <div className={`${mainContainerClassName} ${mainContainerClassName2}`}>
        {/*
        <Avatar
          alt="..."
          src={"https://via.placeholder.com/150x150"}
          className={`${avatarClassName} ${avatarClassName2}`}
        />
        */}
        <MyAvatar
          alt={avatarAlt}
          src={avatarSrc}
          avatarStyles={avatarStyles}
          avatarStyles2={avatarStyles2}
        />
        <div className={`${userDetailClassName} ${userDetailClassName2}`}>
          <h4
            className={`${userNameTxtClassName} ${userNameTxtClassName2}`}
            onClick={this.handleClick}
          >
            {`${username} `}
            <i
              className={`${userDropdownIconClassName} ${userDropdownIconClassName2}`}
            />
          </h4>
        </div>
        <Menu
          className={`${userInfoMenuClassName} ${userInfoMenuClassName2}`}
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          PaperProps={{
            style: {
              ...menuStyles,
              ...menuStyles2
            }
          }}
        >
          <MenuItem
            onClick={this.handleRequestClose}
            className={`${menuItemClassName} ${menuItemClassName2}`}
          >
            <i className={`${accountIconClassName} ${accountIconClassName2}`} />
            <IntlMessages id={profileIntlMsgID} />
          </MenuItem>
          <MenuItem
            onClick={this.handleRequestClose}
            className={`${menuItemClassName} ${menuItemClassName2}`}
          >
            <i
              className={`${settingsIconClassName} ${settingsIconClassName2}`}
            />
            <IntlMessages id={settingsIntlMsgID} />
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleRequestClose();
              this.props.userSignOut();
            }}
            className={`${menuItemClassName} ${menuItemClassName2}`}
          >
            <i className={`${signinIconClassName} ${signinIconClassName2}`} />

            <IntlMessages id={signoutIntlMsgID} />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
export default connect(mapStateToProps, { userSignOut })(UserInfo);

UserInfo.defaultProps = {
  //
  username: "Username",
  avatarAlt: "...",
  avatarSrc: "https://via.placeholder.com/150x150",
  //
  profileURL: "",
  settingsURL: "",
  signoutURL: "",
  //
  profileIntlMsgID: "popup.profile",
  settingsIntlMsgID: "popup.setting",
  signoutIntlMsgID: "popup.logout",
  //
  mainContainerClassName: "user-profile d-flex flex-row align-items-center",
  mainContainerClassName2: "",
  avatarClassName: "user-avatar ",
  avatarClassName2: "",
  avatarStyles: {
    // background may not be seen, since src covers everything.
    // background: "linear-gradient(45deg, red 30%, orange 90%)",
    // boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    width: 50,
    height: 50,
    padding: "0px 0px"
  },
  avatarStyles2: {},
  userDetailClassName: "user-detail",
  userDetailClassName2: "",
  userNameTxtClassName: "user-name",
  userNameTxtClassName2: "",
  userDropdownIconClassName: "zmdi zmdi-caret-down zmdi-hc-fw align-middle",
  userDropdownIconClassName2: "",
  userInfoMenuClassName: "user-info",
  userInfoMenuClassName2: "",
  menuStyles: {},
  menuStyles2: {},
  menuItemClassName: "",
  menuItemClassName2: "",
  accountIconClassName: "zmdi zmdi-account zmdi-hc-fw mr-2",
  accountIconClassName2: "",
  settingsIconClassName: "zmdi zmdi-settings zmdi-hc-fw mr-2",
  settingsIconClassName2: "",
  signinIconClassName: "zmdi zmdi-sign-in zmdi-hc-fw mr-2",
  signinIconClassName2: ""
};
