import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
// import {} from "actions/app_starter/Auth";

// Language
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import LanguageSwitcher from "components/materialUI/LanguageSwitcher/index";
import { switchLanguage, toggleCollapsedNav } from "actions/app_starter/Setting";
// import IconButton from "@material-ui/core/IconButton";
// also import get locale from redux props.settings.locale
// also import switchLanguage action at mapStateToProps
// in local state add langSwitcher key and set to false
// add function onLangSwitcherSelect and handleRequestClose

class LanguageDropdown extends React.Component {
  onLangSwitcherSelect = event => {
    this.setState({
      langSwitcher: !this.state.langSwitcher,
      anchorEl: event.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false
    });
  };

  constructor() {
    super();
    this.state = {
      langSwitcher: false
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  render() {
    const { locale } = this.props;

    const {
      dropdownClassName,
      dropdownClassName2,
      dropdownToggleClassName,
      dropdownToggleClassName2,
      iconButtonClassName,
      iconButtonClassName2,
      iClassName,
      iClassName2,
      dropdownMenuClassName,
      dropdownMenuClassName2,
      languageSwitcherClassName,
      languageSwitcherClassName2
    } = this.props;

    const { iconButtonStyle, iconButtonStyle2 } = this.props;

    const {
      customScrollbarsClassName,
      customScrollbarsClassName2,
      customScrollbarsStyle,
      customScrollbarsStyle2,
      customScrollbarsUlClassName,
      customScrollbarsUlClassName2
    } = this.props;

    const {
      languageItemLiClassName,
      languageItemLiClassName2,
      languageItemDivClassName,
      languageItemDivClassName2,
      languageItemIClassName,
      languageItemIClassName2,
      languageItemTextClassName,
      languageItemTextClassName2
    } = this.props;

    return (
      <div
        style={{
          // position: "absolute",
          // width: "100%",
          // height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
          // alignItems: "flex-start"
          // marginTop: "20px"
          // marginRight: "10px"
          // marginBottom: "50px"
        }}
      >
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
              className={`${iconButtonClassName} ${iconButtonClassName2}`}
              style={{
                ...iconButtonStyle,
                ...iconButtonStyle2
              }}
            >
              <i
                className={`flag flag-24 flag-${locale.icon} ${iClassName2}`}
              />
            </IconButton>
          </DropdownToggle>

          <DropdownMenu
            right
            className={`${dropdownMenuClassName} ${dropdownMenuClassName2}`}
          >
            <LanguageSwitcher
              switchLanguage={this.props.switchLanguage}
              handleRequestClose={this.handleRequestClose}
              //
              customScrollbarsClassName={customScrollbarsClassName}
              customScrollbarsClassName2={customScrollbarsClassName2}
              customScrollbarsStyle={customScrollbarsStyle}
              customScrollbarsStyle2={customScrollbarsStyle2}
              customScrollbarsUlClassName={customScrollbarsUlClassName}
              customScrollbarsUlClassName2={customScrollbarsUlClassName2}
              //
              languageItemLiClassName={languageItemLiClassName}
              languageItemLiClassName2={languageItemLiClassName2}
              languageItemDivClassName={languageItemDivClassName}
              languageItemDivClassName2={languageItemDivClassName2}
              languageItemIClassName={languageItemIClassName}
              languageItemIClassName2={languageItemIClassName2}
              languageItemTextClassName={languageItemTextClassName}
              languageItemTextClassName2={languageItemTextClassName2}
            />
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

LanguageDropdown.defaultProps = {
  dropdownClassName: "quick-menu",
  dropdownClassName2: "",
  dropdownToggleClassName: "d-inline-block",
  dropdownToggleClassName2: "",
  iconButtonClassName: "icon-btn",
  iconButtonClassName2: "",
  iClassName: "",
  iClassName2: "",
  dropdownMenuClassName: "w-50",
  dropdownMenuClassName2: "",
  languageSwitcherClassName: "",
  languageSwitcherClassName2: "",
  iconButtonStyle: {
    boxShadow: "0 4px 8px rgba(0,0,0,0.05), 0 6px 10px 0 rgba(0,0,0,0.05)"
  },
  iconButtonStyle2: {}
};

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

export default connect(mapStateToProps, {
  switchLanguage
})(LanguageDropdown);
