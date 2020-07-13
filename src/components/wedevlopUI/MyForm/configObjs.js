export default {
  //
  // FORM CONFIG ---------------------------------------------------------------
  //
  formOptions: {
    autoComplete: "off",
    columns: [
      {
        element: "column",
        rowNumber: 1,
        columnNumber: 1,
        columnSize: "1-of-1",
        style: {},
        addStyle: {},
        className: "",
        addClassName: ""
      }
    ]
  },
  formElements: [],
  //
  // VALIDATION RULES ----------------------------------------------------------
  //
  validationRules: {
    none: {
      name: "none"
    },
    required: {
      name: "required",
      inputNames: [],
      errorText: "Required.",
      intlMsgID: "myform.invalid.rule.required",
      useIntlMsgID: false
    },
    validEmail: {
      name: "validEmail",
      inputNames: [],
      errorText: "Email is not valid.",
      intlMsgID: "myform.invalid.rule.validEmail",
      useIntlMsgID: false
    },
    matchEmails: {
      name: "matchEmails",
      inputNames: [],
      errorText: "Emails do not match.",
      intlMsgID: "myform.invalid.rule.matchEmails",
      useIntlMsgID: false
    },
    validPassword1: {
      name: "validPassword1",
      inputNames: [],
      errorText: "Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 numeric and 1 special character.",
      intlMsgID: "myform.invalid.rule.validPassword1",
      useIntlMsgID: false
    },
    matchPasswords: {
      name: "matchPasswords",
      inputNames: [],
      errorText: "Passwords do not match.",
      intlMsgID: "myform.invalid.rule.matchPasswords",
      useIntlMsgID: false
    },

    isMinChars1: {
      name: "isMinChars1",
      inputNames: [],
      errorText: "Minimum 1 character.",
      intlMsgID: "myform.invalid.rule.isMinChars1",
      useIntlMsgID: false
    },
    isMinChars3: {
      name: "isMinChars3",
      inputNames: [],
      errorText: "Minimum 3 characters.",
      intlMsgID: "myform.invalid.rule.isMinChars3",
      useIntlMsgID: false
    },
    isMinChars5: {
      name: "isMinChars5",
      inputNames: [],
      errorText: "Minimum 5 characters.",
      intlMsgID: "myform.invalid.rule.isMinChars5",
      useIntlMsgID: false
    },
    isMinChars6: {
      name: "isMinChars6",
      inputNames: [],
      errorText: "Minimum 6 characters.",
      intlMsgID: "myform.invalid.rule.isMinChars6",
      useIntlMsgID: false
    },
    isMinChars8: {
      name: "isMinChars8",
      inputNames: [],
      errorText: "Minimum 8 characters.",
      intlMsgID: "myform.invalid.rule.isMinChars8",
      useIntlMsgID: false
    },
    isMaxChars25: {
      name: "isMaxChars25",
      inputNames: [],
      errorText: "Maximum 25 characters.",
      intlMsgID: "myform.invalid.rule.isMaxChars25",
      useIntlMsgID: false
    },
    isMaxChars50: {
      name: "isMaxChars50",
      inputNames: [],
      errorText: "Maximum 50 characters.",
      intlMsgID: "myform.invalid.rule.isMaxChars50",
      useIntlMsgID: false
    },
    isMaxChars100: {
      name: "isMaxChars100",
      inputNames: [],
      errorText: "Maximum 100 characters.",
      intlMsgID: "myform.invalid.rule.isMaxChars100",
      useIntlMsgID: false
    },
    isMaxChars200: {
      name: "isMaxChars200",
      inputNames: [],
      errorText: "Maximum 200 characters.",
      intlMsgID: "myform.invalid.rule.isMaxChars200",
      useIntlMsgID: false
    },
    isMaxChars500: {
      name: "isMaxChars500",
      inputNames: [],
      errorText: "Maximum 500 characters.",
      intlMsgID: "myform.invalid.rule.isMaxChars500",
      useIntlMsgID: false
    }
  }
};
