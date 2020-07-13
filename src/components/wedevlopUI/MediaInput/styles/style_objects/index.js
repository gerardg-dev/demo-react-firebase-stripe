const defaultFontFamily = "Roboto, Open Sans, Segoe UI, sans-serif";
const defaultFontColor = "rgba(0, 0, 0, 1.0)";
const defaultFontSize = "14px";
const defaultFontWeight = 500;

// MediaInput -------------------------------------------------------------

const selectedFilesAbsoluteContainerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)", // *UNCOMMENT*
  // backgroundColor: "red", // *DELETE*
  // margin: "10px",
  // padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // borderStyle: "solid",
  // borderRadius: "30px",
  // borderColor: "red",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  overflow: "auto"
};

const selectedFilesRelativeContainerStyle = {
  // backgroundColor: "lightGreen", // *DELETE*
  position: "relative",
  width: "100%",
  height: "100%",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  overflow: "auto"
};

const selectedFilesContentStyle = {
  backgroundColor: "rgba(255, 255, 255, 1.0)", // *UNCOMMENT*
  // backgroundColor: "green", // *DELETE*
  width: "100%",
  minWidth: "200px",
  maxWidth: "600px",
  // height: "auto",
  // overflow: "auto",
  // margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  // borderWidth: "2px",
  borderRadius: "30px",
  // borderColor: "lightGray"
  //
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const imgPreviewAndCropContainerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.1)", // *UNCOMMENT*
  // backgroundColor: "orange", // *DELETE*
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  borderWidth: "2px",
  // borderRadius: "30px",
  borderColor: "gray",
  width: "100%"
};

const selectedFilesTitleTextStyle = {
  color: "lightGray"
};

const selectedFilesFootnoteTextStyle = {
  color: "red"
};

const cancelButtonStyle = {
  backgroundColor: "red",
  height: "30px",
  minHeight: "30px",
  minWidth: "200px",
  overflow: "hidden",
  // borderStyle: "solid",
  borderRadius: "6px",
  // borderWidth: "2px",
  // borderColor: "red",
  color: "white"
};

const uploadButtonStyle = {
  backgroundColor: "lightGreen",
  height: "30px",
  minHeight: "30px",
  minWidth: "200px",
  overflow: "hidden",
  // borderStyle: "solid",
  borderRadius: "6px",
  // borderWidth: "2px",
  // borderColor: "green",
  color: "white"
};

const cropPreviewContainerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const cropPreviewStyle = {
  // Dont change this styles
  overflow: "hidden",
  //
  width: "500px",
  height: "200px",
  minWidth: "1px",
  minHeight: "1px",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  // BORDER
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "4px",
  borderColor: "lightBlue"
  //
  // backgroundSize: "contain",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center center",
};

// DropzoneInput -------------------------------------------------------------

// DropzoneInput - dropzoneType "dropbox"

const dropzoneContainerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.05)", // *UNCOMMENT*
  // backgroundColor: "pink", // *DELETE*
  width: "100%",
  height: "100%",
  minWidth: "100px",
  minHeight: "100px",
  maxWidth: "400px",
  maxHeight: "300px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  borderRadius: "10px",
  borderWidth: "2px",
  borderColor: "lightBlue"
};

const dropzoneStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.10)", // *UNCOMMENT*
  // backgroundColor: "purple", // *DELETE*
  color: "white",
  // width: "90%",
  // height: "90%",
  // minWidth: "350px",
  // minHeight: "100px",
  // maxWidth: "550px",
  // maxHeight: "150px",
  width: "100%",
  height: "100%",
  minWidth: "100px",
  minHeight: "100px",
  maxWidth: "400px",
  maxHeight: "200px",
  padding: "20px",
  borderStyle: "dashed",
  borderWidth: "1px",
  borderRadius: "10px",
  borderColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

// DropzoneInput - dropzoneType "text"

const dropzoneTextStyle = {
  color: "lightBlue",
  fontSize: "12px",
  fontWeight: "bold"
};

// DropzoneInput - dropzoneType "button"

const dropzoneButtonContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.0)", // *UNCOMMENT*
  // backgroundColor: "lightBlue", // *DELETE*
  boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.10)",
  width: "100%",
  height: "100%",
  minWidth: "80px",
  minHeight: "20px",
  maxWidth: "200px",
  maxHeight: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "lightBlue",
  borderRadius: "50px",
  padding: "10px"
  // margin: "1px"
};
const dropzoneButtonStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "lightBlue",
  fontSize: "12px"
};

// CropperInput --------------------------------------------------------------

const cropInputStyle = {
  width: "100%",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "yellow"
};

// FilesList -----------------------------------------------------------------

const filesListContainerStyle = {
  width: "100%",
  // height: "400px",
  minWidth: "100px",
  // minHeight: "100px",
  maxWidth: "900px",
  maxHeight: "400px",
  backgroundColor: "lightGray",
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "6px",
  borderColor: "lightBlue",
  padding: "10px",
  overflowX: "hidden",
  overflowY: "scroll",
  boxSizing: "contentBox",

  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "pink" // *testBorders*
};
const filesListItemStyle = {
  backgroundColor: "white",
  width: "100%",
  // height: "200px",
  minWidth: "40px",
  minHeight: "2px",
  maxWidth: "600px",
  // maxHeight: "200px",
  borderStyle: "solid",
  // borderWidth: "2px",
  borderRadius: "8px",
  // borderColor: "white",
  // margin: "10px",
  padding: "10px",
  color: "lightGray",
  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "purple" // *testBorders*
};

const listItemFilePreviewContainerStyle = {
  flex: 0.5,
  // width: "50%",
  height: "100%",
  minWidth: "2px",
  minHeight: "2px",
  // maxWidth: "100",
  // maxHeight: "200px",
  backgroundColor: "lightGray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "orange" // *testBorders*
};
const listItemFilePreviewStyle = {
  width: "20px",
  height: "100%",
  minWidth: "2px",
  minHeight: "2px",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: 0,
  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "red" // *testBorders*
};

const listItemFileInfoContainerStyle = {
  flex: 0.5,
  width: "100%",
  height: "100%",
  minWidth: "2px",
  minHeight: "2px",
  maxWidth: "100%",
  maxHeight: "100%",
  padding: "10px",
  // borderStyle: "solid",
  // borderWidth: "2px",
  // borderRadius: "8px",
  // borderColor: "lightBlue",
  color: "lightGray",
  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "blue" // *testBorders*
};
const listItemFileInfoStyle = {
  width: "100%",
  height: "100%",
  minWidth: "2px",
  // minHeight: "2px",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: 0,
  //
  borderStyle: "solid", // *testBorders*
  borderWidth: "5px", // *testBorders*
  borderColor: "brown" // *testBorders*
};

// OneImgUpload --------------------------------------------------------------

const oneImgUploadStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "1000px",
  objectFit: "cover"
};

// Content Layout --------------------------------------------------------------

const topLeftColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start"
};
const topCenterColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center"
};
const topRightColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end"
};
const centerLeftColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"
};
const centerColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
const centerRightColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end"
};
const bottomLeftColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start"
};
const bottomCenterColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center"
};
const bottomRightColumnContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end"
};

const topLeftRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start"
};
const topCenterRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center"
};
const topRightRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-end"
};
const centerLeftRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start"
};
const centerRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};
const centerRightRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end"
};
const bottomLeftRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "flex-start"
};
const bottomCenterRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "center"
};
const bottomRightRowContentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "flex-end"
};

export default {
  // MediaInput ----------------------------------------------------------------
  //
  selectedFilesAbsoluteContainerStyle,
  selectedFilesRelativeContainerStyle,
  selectedFilesContentStyle,
  //
  imgPreviewAndCropContainerStyle,
  //
  selectedFilesTitleTextStyle,
  selectedFilesFootnoteTextStyle,
  //
  cancelButtonStyle,
  uploadButtonStyle,
  //
  cropPreviewContainerStyle,
  cropPreviewStyle,
  //
  // DropzoneInput -------------------------------------------------------------
  //
  dropzoneContainerStyle,
  dropzoneStyle,
  dropzoneTextStyle,
  dropzoneButtonContainerStyle,
  dropzoneButtonStyle,
  //
  // CropperInput --------------------------------------------------------------
  //
  cropInputStyle,
  //
  // FilesList -----------------------------------------------------------------
  //
  filesListContainerStyle,
  filesListItemStyle,
  listItemFilePreviewContainerStyle,
  listItemFilePreviewStyle,
  listItemFileInfoContainerStyle,
  listItemFileInfoStyle,
  //
  // OneImgUpload --------------------------------------------------------------
  //
  oneImgUploadStyle,
  //
  // Content Layout -----------------------------------------------------------------
  //
  topLeftColumnContentStyle,
  topCenterColumnContentStyle,
  topRightColumnContentStyle,
  centerLeftColumnContentStyle,
  centerColumnContentStyle,
  centerRightColumnContentStyle,
  bottomLeftColumnContentStyle,
  bottomCenterColumnContentStyle,
  bottomRightColumnContentStyle,
  //
  topLeftRowContentStyle,
  topCenterRowContentStyle,
  topRightRowContentStyle,
  centerLeftRowContentStyle,
  centerRowContentStyle,
  centerRightRowContentStyle,
  bottomLeftRowContentStyle,
  bottomCenterRowContentStyle,
  bottomRightRowContentStyle
};
