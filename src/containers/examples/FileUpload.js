import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import MediaInput from "../../components/wedevlopUI/MediaInput/index";
import MyContainer from "../../components/wedevlopUI/layout/MyContainer";

import { uploadFile } from "../../thunks/app_starter/Storage";

const containerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
  // color: "white",
};

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  fileUploadCb = (code, meta) => {
    // https://www.npmjs.com/package/react-notifications

    // NotificationManager.info(message, title, timeOut, callback, priority);
    // NotificationManager.success(message, title, timeOut, callback, priority);
    // NotificationManager.warning(message, title, timeOut, callback, priority);
    // NotificationManager.error(message, title, timeOut, callback, priority);

    // message	| string |	The message string
    // title	| string |	The title string
    // timeOut	| integer |	The popup timeout in milliseconds
    // callback	| function |	A function that gets fired when the popup is clicked
    // priority	| boolean |	If true, the message gets inserted at the top

    let message = ":)";
    let error = meta && meta.error ? meta.error : undefined;
    let fileNum = meta && meta.fileNum ? meta.fileNum : undefined;
    let totalFiles = meta && meta.totalFiles ? meta.totalFiles : undefined;

    if (code === "wrong-file-requirements") {
      message = `File ${fileNum} of ${totalFiles} does not meet the requirements.`;
      NotificationManager.warning(message);
    }
    if (code === "file-upload-in-process") {
      message = `Uploading file ${fileNum} of ${totalFiles}`;
      NotificationManager.info(message, code);
    }
    if (code === "file-upload-success") {
      message = `File ${fileNum} of ${totalFiles} successfully uploaded!`;
      NotificationManager.success(message, code);
    }
    if (code === "file-upload-error") {
      message = `Error at file ${fileNum} of ${totalFiles}!`;
      // NotificationManager.error(message, code);
      NotificationManager.error(message);
      if (error !== undefined) {
        // NotificationManager.error(JSON.stringify(message));
        if (error && error.constructor === Object) {
          // NotificationManager.error("Something happened - Object");
        } else if (error && error.constructor === Array) {
          // NotificationManager.error("Something happened - Array");
        } else if (error && error instanceof Error) {
          // NotificationManager.error(message.message);
        } else {
          // NotificationManager.error(message);
        }
      }
    }
  };

  renderTestContent = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          color: "white",
          fontSize: "20px"
        }}
      >
        {"TEST CHILDREN"}
      </div>
    );
  };

  render() {
    const { locale } = this.props;

    const testBorderStyle = {
      borderStyle: "solid",
      borderWidth: "10px",
      borderColor: "purple"
    };

    return (
      <MyContainer size="mainContainer">
        <MyContainer size="fitScreen" addStyle={{ ...containerStyle }}>
          <MediaInput
            // MediaInput ------------------------------------------------------
            // selectedFilesAbsoluteContainerStyle={testBorderStyle}
            // selectedFilesRelativeContainerStyle={testBorderStyle}
            // selectedFilesContentStyle={testBorderStyle}
            // selectedFilesTitleTextStyle={testBorderStyle}
            // selectedFilesFootnoteTextStyle={testBorderStyle}
            // imgPreviewAndCropContainerStyle={testBorderStyle}
            // cancelButtonStyle={testBorderStyle}
            // uploadButtonStyle={testBorderStyle}
            // cropPreviewContainerStyle={testBorderStyle}
            // cropPreviewStyle={testBorderStyle}
            // addSelectedFilesAbsoluteContainerStyle={testBorderStyle}
            // addSelectedFilesRelativeContainerStyle={testBorderStyle}
            // addSelectedFilesContentStyle={testBorderStyle}
            // addSelectedFilesTitleTextStyle={testBorderStyle}
            // addSelectedFilesFootnoteTextStyle={testBorderStyle}
            // addImgPreviewAndCropContainerStyle={testBorderStyle}
            // addCancelButtonStyle={testBorderStyle}
            // addUploadButtonStyle={testBorderStyle}
            // addCropPreviewContainerStyle={testBorderStyle}
            // addCropPreviewStyle={testBorderStyle}
            dropzoneType="dropbox"
            fileType="image"
            selectedFilesTitleText="Parent Test Title"
            selectedFilesFootnoteText="Parent Test Footnote"
            cancelButtonText="Parent CANCEL"
            uploadButtonText="Parent UPLOAD"
            buttonsDirection="row"
            showTitle={true}
            showFootnote={true}
            cropImage={true}
            showCropPreview={true}
            circledCropPreview={true}
            outsideButtons={false}
            // DropzoneInput ---------------------------------------------------
            multipleFiles={false}
            animateDrop={true}
            fileExtensions="image/*"
            minBytesFileSize={100000} // 1048576 Bytes = 1 MB
            maxBytesFileSize={1000000000000}
            dropzoneTextA="Parent Test Dropzone TextA"
            dropzoneTextB="Parent Test Dropzone TextB"
            fileUploadCb={this.fileUploadCb}
            // CropperInput ----------------------------------------------------
            // cropInputStyle={testBorderStyle}
            // addCropInputStyle={testBorderStyle}
            cropPreviewHeight="300px"
            cropInputHeight={600}
            aspectRatio={1}
            dragMode="move"
            // guides={true}
            // scalable={true}
            // rotatable={true}
            // cropBoxMovable={true}
            // cropBoxResizable={true}
            uploadFileHandler={this.props.uploadFile}
            // uploadFileHandler={uploadFileHandler}
            // FilesList -------------------------------------------------------
            // filesListContainerStyle={testBorderStyle}
            // filesListItemStyle={testBorderStyle}
            // listItemFilePreviewContainerStyle={testBorderStyle}
            // listItemFilePreviewStyle={testBorderStyle}
            // listItemFileInfoContainerStyle={testBorderStyle}
            // listItemFileInfoStyle={testBorderStyle}
            // addFilesListContainerStyle={testBorderStyle}
            // addFilesListItemStyle={testBorderStyle}
            // addListItemFilePreviewContainerStyle={testBorderStyle}
            // addListItemFilePreviewStyle={testBorderStyle}
            // addListItemFileInfoContainerStyle={testBorderStyle}
            // addListItemFileInfoStyle={testBorderStyle}
            showFileName={false}
            showFilePath={false}
            showFilePreview={false}
            showFileSize={false}
            showFileType={false}
            showFileIconType={false}
            // filePreviewPos="left"
            // fileInfoPos="topLeft"
          />
          {/*this.state.showNotification && NotificationManager.error(alertMessage)*/}
          {/*NotificationManager.success("Success message", "Title here")*/}
          <NotificationContainer />
        </MyContainer>
      </MyContainer>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

export default connect(mapStateToProps, {
  uploadFile
})(FileUpload);

FileUpload.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 0.0)"
};
