import React from "react";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";

const Footer = props => {
  const {
    copyrightText,
    copyrightYear,
    buttonHref,
    buttonText,
    //
    footerClassName,
    copyrightTextClassName,
    buttonClassName,
    //
    addFooterClassName,
    addCopyrightTextClassName,
    addButtonClassName
  } = props;

  return (
    <footer className={`${footerClassName} ${addFooterClassName}`}>
      <span
        className={`${copyrightTextClassName} ${addCopyrightTextClassName}`}
      >
        {copyrightText}&copy;{` `}
        {copyrightYear}
      </span>
      <Button
        className={`${buttonClassName} ${addButtonClassName}`}
        href={buttonHref}
        target="_blank"
        size="small"
        color="primary"
      >
        {buttonText}
      </Button>
    </footer>
  );
};

// <IntlMessages id="" />

Footer.defaultProps = {
  copyrightText: `Copyright YourCompany `,
  copyrightYear: "2020",
  buttonHref: "http://www.wedevlop.com/",
  buttonText: "Developed by WeDevlop",
  //
  footerClassName: "app-footer",
  copyrightTextClassName: "d-inline-block",
  buttonClassName: "",
  //
  addFooterClassName: "",
  addCopyrightTextClassName: "",
  addButtonClassName: ""
};

export default Footer;
