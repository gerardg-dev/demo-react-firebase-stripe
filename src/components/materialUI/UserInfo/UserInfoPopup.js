import React from "react";
import { connect } from "react-redux";
import { userSignOut } from "actions/app_starter/Auth";
import IntlMessages from "util/IntlMessages";

class UserInfoPopup extends React.Component {
  render() {
    const {
      username,
      //
      mainContainerClassName,
      mainContainerClassName2,
      userProfileClassName,
      userProfileClassName2,
      userAvatarClassName,
      userAvatarClassName2,
      userDetailClassName,
      userDetailClassName2,
      userNameTxtClassName,
      userNameTxtClassName2,
      dropdownItemClassName,
      dropdownItemClassName2,
      faceIconClassName,
      faceIconClassName2,
      settingsIconClassName,
      settingsIconClassName2,
      signInIconClassName,
      signInIconClassName2
    } = this.props;
    return (
      <div className={`${mainContainerClassName} ${mainContainerClassName2}`}>
        <div className={`${userProfileClassName} ${userProfileClassName2}`}>
          <img
            className={`${userAvatarClassName} ${userAvatarClassName2}`}
            src="https://via.placeholder.com/150x150"
            alt="User"
          />
          <div className={`${userDetailClassName} ${userDetailClassName2}`}>
            <h4 className={`${userNameTxtClassName} ${userNameTxtClassName2}`}>
              {username}
            </h4>
            <small>Administrator</small>
          </div>
        </div>
        <span className={`${dropdownItemClassName} ${dropdownItemClassName2}`}>
          <i className={`${faceIconClassName} ${faceIconClassName2}`} />
          <IntlMessages id="popup.profile" />
        </span>
        <span className={`${dropdownItemClassName} ${dropdownItemClassName2}`}>
          <i className={`${settingsIconClassName} ${settingsIconClassName2}`} />
          <IntlMessages id="popup.setting" />
        </span>
        <span
          className={`${dropdownItemClassName} ${dropdownItemClassName2}`}
          onClick={() => {
            console.log("Try to logoput");
            this.props.userSignOut();
          }}
        >
          <i className={`${signInIconClassName} ${signInIconClassName2}`} />
          <IntlMessages id="popup.logout" />
        </span>
      </div>
    );
  }
}

export default connect(null, { userSignOut })(UserInfoPopup);

UserInfoPopup.defaultProps = {
  username: "Your Name",
  //
  mainContainerClassName: "",
  mainContainerClassName2: "",
  userProfileClassName: "user-profile",
  userProfileClassName2: "",
  userAvatarClassName: "user-avatar border-0 size-40 rounded-circle",
  userAvatarClassName2: "",
  userDetailClassName: "user-detail ml-2",
  userDetailClassName2: "",
  userNameTxtClassName: "user-name mb-0",
  userNameTxtClassName2: "",
  dropdownItemClassName: "jr-link dropdown-item text-muted",
  dropdownItemClassName2: "",
  faceIconClassName: "zmdi zmdi-face zmdi-hc-fw mr-1",
  faceIconClassName2: "",
  settingsIconClassName: "zmdi zmdi-settings zmdi-hc-fw mr-1",
  settingsIconClassName2: "",
  signInIconClassName: "zmdi zmdi-sign-in zmdi-hc-fw mr-1",
  signInIconClassName2: ""
};
