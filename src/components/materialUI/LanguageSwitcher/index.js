import React from "react";

import LanguageItem from "./LanguageItem";
import languageData from "./data";
import CustomScrollbars from "util/CustomScrollbars";

let totalLangs = languageData.length;
let dropdownItemHeight = totalLangs * 38.33;

const LanguageSwitcher = props => {
  const { switchLanguage, handleRequestClose } = props;

  // const { dropdownItemHeight } = props;

  const {
    customScrollbarsClassName,
    customScrollbarsClassName2,
    customScrollbarsStyle,
    customScrollbarsStyle2,
    customScrollbarsUlClassName,
    customScrollbarsUlClassName2
  } = props;

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
    <CustomScrollbars
      className={`${customScrollbarsClassName} ${customScrollbarsClassName2}`}
      style={{
        ...customScrollbarsStyle,
        ...customScrollbarsStyle2
      }}
    >
      <ul
        className={`${customScrollbarsUlClassName} ${customScrollbarsUlClassName2}`}
      >
        {languageData.map((language, index) => (
          <LanguageItem
            key={index}
            language={language}
            handleRequestClose={handleRequestClose}
            switchLanguage={switchLanguage}
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
        ))}
      </ul>
    </CustomScrollbars>
  );
};

LanguageSwitcher.defaultProps = {
  // dropdownItemHeight: totalLangs * 38.33,
  //
  customScrollbarsClassName: "messages-list language-list scrollbar",
  customScrollbarsClassName2: "",
  customScrollbarsStyle: { height: dropdownItemHeight },
  customScrollbarsStyle2: "",
  customScrollbarsUlClassName: "list-unstyled",
  customScrollbarsUlClassName2: ""
};

export default LanguageSwitcher;
