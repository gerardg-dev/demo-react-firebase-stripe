import React from "react";

const SearchBox = props => {
  const { styleName, placeholder, onChange, value } = props;
  const {
    containerClassName,
    containerClassName2,
    formClassName,
    formClassName2,
    inputClassName,
    inputClassName2,
    buttonClassName,
    buttonClassName2,
    iconClassName,
    iconClassName2
  } = props;
  return (
    <div
      className={`${styleName} ${containerClassName} ${containerClassName2}`}
    >
      <div className={`${formClassName} ${formClassName2}`}>
        <input
          className={`${inputClassName} ${inputClassName2}`}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <button className={`${buttonClassName} ${buttonClassName2}`}>
          <i className={`${iconClassName} ${iconClassName2}`} />
        </button>
      </div>
    </div>
  );
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
  //
  containerClassName: "search-bar right-side-icon bg-transparent",
  containerClassName2: "",
  formClassName: "form-group",
  formClassName2: "",
  inputClassName: "form-control border-0",
  inputClassName2: "",
  buttonClassName: "search-icon",
  buttonClassName2: "",
  iconClassName: "zmdi zmdi-search zmdi-hc-lg",
  iconClassName2: ""
};
