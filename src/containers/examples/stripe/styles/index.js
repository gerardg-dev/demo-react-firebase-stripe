const topBarContainerHeight = 120;
const topMargin = topBarContainerHeight + 20;
const topBarContainerHeightStr = `${topBarContainerHeight.toString()}px`;
const topMarginStr = `${topMargin}px`;

const topBarContainer = {
  position: "absolute",
  top: 0,
  left: 20,
  right: 20,
  minHeight: topBarContainerHeightStr,
  paddingTop: "10px",
  paddingBottom: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
  backgroundColor: "rgba(84, 105, 212, 1.0)",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px"
};

const userStatusContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "clear",
  color: "white",
  lineHeight: "6px"
};

const userStatus = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};

const userIndicator = {
  width: "20px",
  height: "20px",
  borderRadius: "50px",
  marginRight: "10px"
};

const mainContainer = {
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  // paddingTop: "50px",
  // paddingBottom: "50px",
  backgroundColor: "rgba(227, 232, 239, 1.0)"
};

const navBarContainer = {
  paddingTop: "10px",
  // marginLeft: "10px",
  // marginBottom: "10px",
  paddingRight: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  backgroundColor: "rgba(84, 105, 212, 1.0)"
};

const signUpButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "60px",
  minWidth: "200px",
  backgroundColor: "clear",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "white",
  borderRadius: "50px",
  color: "white",
  fontSize: "16px"
  // fontWeight: "bold"
};

const contentSection = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  marginBottom: "20px",
  minWidth: "800px",
  maxWidth: "1200px",
  borderStyle: "solid",
  borderRadius: "10px",
  borderColor: "rgba(255, 255, 255, 0.0)",
  boxShadow: "5px 5px rgba(0, 0, 0, 0.05)",
  fontSize: "20px",
  color: "rgba(105, 115, 134, 1.0)"
};

const hLine = {
  backgroundColor: "rgba(84, 105, 212, 1.0)",
  height: "1px",
  borderRadius: "20px"
};

const elementSeparator = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  height: "10px"
};

const rowContentLeft = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center"
};
const rowContentCentered = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};
const rowContentRight = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center"
};

const mainMenuButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "350px",
  height: "60px",
  minWidth: "200px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  borderStyle: "solid",
  borderWidth: "2px",
  // borderColor: "rgba(0, 0, 0, 0.05)",
  borderColor: "rgba(84, 105, 212, 0.5)",
  borderRadius: "50px",
  color: "rgba(84, 105, 212, 0.5)",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "5px 5px rgba(0, 0, 0, 0.05)"
};

export default {
  topBarContainerHeight,
  topMargin,
  topBarContainerHeightStr,
  topMarginStr,
  //
  userStatusContainer,
  userStatus,
  userIndicator,
  //
  mainContainer,
  topBarContainer,
  navBarContainer,
  signUpButtonStyle,
  contentSection,
  hLine,
  elementSeparator,
  rowContentLeft,
  rowContentCentered,
  rowContentRight,
  mainMenuButtonStyle
};
