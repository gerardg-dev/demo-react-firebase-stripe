import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import IntlMessages from "util/IntlMessages";

class Menu extends Component {
  componentDidMount() {
    const { history } = this.props;

    const pathname = `#${history.location.pathname}`; // get current path
    const mainMenu = document.getElementsByClassName("nav-item");
    for (let i = 0; i < mainMenu.length; i++) {
      mainMenu[i].onclick = function() {
        for (let j = 0; j < mainMenu.length; j++) {
          if (mainMenu[j].classList.contains("active")) {
            mainMenu[j].classList.remove("active");
          }
        }
        this.classList.toggle("active");
      };
    }
    const subMenuLi = document.getElementsByClassName("nav-arrow");
    for (let i = 0; i < subMenuLi.length; i++) {
      subMenuLi[i].onclick = function() {
        for (let j = 0; j < subMenuLi.length; j++) {
          if (subMenuLi[j].classList.contains("active")) {
            subMenuLi[j].classList.remove("active");
          }
        }
        this.classList.toggle("active");
      };
    }
    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("active");
      } else {
        this.closest(activeLi, "li").classList.add("active");
      }
      const parentNav = this.closest(activeNav, ".nav-item");
      if (parentNav) {
        parentNav.classList.add("active");
      }
    } catch (e) {}
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function(fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {}

    return null;
  }

  render() {
    const {
      to,
      intlMsgID,
      //
      containerClassName,
      containerClassName2,
      ulClassName,
      ulClassName2,
      liClassName,
      liClassName2,
      navlinkClassName,
      navlinkClassName2,
      spanTextClassName,
      spanTextClassName2
    } = this.props;
    return (
      <div className={`${containerClassName} ${containerClassName2}`}>
        <ul className={`${ulClassName} ${ulClassName2}`}>
          <li className={`${liClassName} ${liClassName2}`}>
            <NavLink
              to={to}
              className={`${navlinkClassName} ${navlinkClassName2}`}
            >
              <span className={`${spanTextClassName} ${spanTextClassName2}`}>
                <IntlMessages id={`${intlMsgID}`} />{" "}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);

Menu.defaultProps = {
  to: "/app/sample-page",
  intlMsgID: "pages.samplePage",
  //
  containerClassName: "app-main-menu d-none d-md-block",
  containerClassName2: "",
  ulClassName: "navbar-nav navbar-nav-mega",
  ulClassName2: "",
  liClassName: "nav-item",
  liClassName2: "",
  navlinkClassName: "",
  navlinkClassName2: "",
  spanTextClassName: "nav-text",
  spanTextClassName2: ""
};
