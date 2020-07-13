import React from "react";
import { withRouter } from "react-router-dom";
import Menu from "components/materialUI/TopNav/Menu";

class TopNav extends React.Component {
  render() {
    const {
      mainContainerClassName,
      mainContainerClassName2,
      menuContainerClassName,
      menuContainerClassName2
    } = this.props;
    return (
      <div
        className={`${mainContainerClassName} ${this.props.styleName} ${mainContainerClassName2}`}
      >
        <div className={`${menuContainerClassName} ${menuContainerClassName2}`}>
          <Menu />
        </div>
      </div>
    );
  }
}

export default withRouter(TopNav);

TopNav.defaultProps = {
  styleName: "",
  //
  mainContainerClassName: "app-top-nav d-none d-md-block",
  mainContainerClassName2: "",
  menuContainerClassName: "d-flex app-toolbar align-items-center",
  menuContainerClassName2: ""
};
