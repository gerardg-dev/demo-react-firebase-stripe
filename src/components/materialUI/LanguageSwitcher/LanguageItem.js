import React from "react";

const LanguageItem = props => {
  const { language, switchLanguage, handleRequestClose } = props;
  const { icon, name } = language;

  const {
    languageItemLiClassName,
    languageItemLiClassName2,
    languageItemDivClassName,
    languageItemDivClassName2,
    languageItemIClassName,
    languageItemIClassName2,
    languageItemTextClassName,
    languageItemTextClassName2
  } = props;

  return (
    <li
      // className="pointer"
      className={`${languageItemLiClassName} ${languageItemLiClassName2}`}
      onClick={() => {
        handleRequestClose();
        switchLanguage(language);
      }}
    >
      <div
        // className="d-flex align-items-center"
        className={`${languageItemDivClassName} ${languageItemDivClassName2}`}
      >
        <i className={`flag flag-24 flag-${icon}`} />
        <h4
          // className="mb-0 ml-2"
          className={`${languageItemTextClassName} ${languageItemTextClassName2}`}
        >
          {name}
        </h4>
      </div>
    </li>
  );
};

LanguageItem.defaultProps = {
  languageItemLiClassName: "pointer",
  languageItemLiClassName2: "",
  languageItemDivClassName: "d-flex align-items-center",
  languageItemDivClassName2: "",
  languageItemIClassName: "",
  languageItemIClassName2: "",
  languageItemTextClassName: "mb-0 ml-2",
  languageItemTextClassName2: ""
};

export default LanguageItem;
