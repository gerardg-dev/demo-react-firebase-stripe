// Select styleN,
// receive styles and addStyles
// Have default props for colors, fonts, text samples
// Should have a prop to determine what kind of data we can upload AND
// AND min max props for upload size
// resize? if resize true, check if square resize or free resize

// main elmenets:
// ImageBox - Where upload will be seen after having selected and cropped
// UploadBoxAndTxt - Space where we can drag file, or click to open folder
// modal --->
// CropeZone - Box where we see the selected image and can crop
// FilePreview - Box where we can see the file preview, visible as we crop
//
// Add Styles for each of them
//
// Some BOOL
// show ImageBox or just UploadBoxAndTxt
// show modal to crop and preview image or just slect file
// if show modal
//  cropping square shape or free shape
//  show crop preview? or no
//
// -----------------------------------------------------------------------------
//
// options:
// media type: image, images, video, videos, file, files, zipFile, zipFiles
// size width and height
// image resize content options, cover, expamd, fit, centered, etc...
// min and max width amd height
// pass content text for buttons or instructions

// OPTIONS OR WAYS TO USE THIS
// UPload single file, and preview as circle, square, or rectangle
// Upload single file with file details as name, info, path, size, etc
// Upload Multiple files and see list of files with previews or icons, and info
// Upload single file with crop options, crop square, crop circle, crop rectabgle, etc

import React, { useState, useEffect } from "react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import FilesList from "./FilesList";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import cbCodes from "./cbCodes";

let dropzoneType = "button"; // dropbox, text, button.
let type = "button"; // dropbox, text, button.
// should text change on drag? accept text to show, and text in case it changes on drop.
let fileType = "image"; // "image" or "files"
let cropImage = true; // cropEnabled

let multipleFiles = false;
let fileExtensions =
  "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document";
// let shouldDropzoneChangeText?
// let dropzoneTextA
// let dropzoneTextB

const MediaInput = props => {
  // MediaInput -------------------------------------------------------------

  // direct style props
  let { cropPreviewHeight } = props;

  // MediaInput - styles

  let {
    selectedFilesAbsoluteContainerStyle,
    selectedFilesRelativeContainerStyle,
    selectedFilesContentStyle,
    selectedFilesTitleTextStyle,
    selectedFilesFootnoteTextStyle,
    imgPreviewAndCropContainerStyle,
    cancelButtonStyle,
    uploadButtonStyle,
    cropPreviewContainerStyle,
    cropPreviewStyle,
    oneImgUploadStyle
  } = props;

  // MediaInput - addStyles

  let {
    addSelectedFilesAbsoluteContainerStyle,
    addSelectedFilesRelativeContainerStyle,
    addSelectedFilesContentStyle,
    addSelectedFilesTitleTextStyle,
    addSelectedFilesFootnoteTextStyle,
    addImgPreviewAndCropContainerStyle,
    addCancelButtonStyle,
    addUploadButtonStyle,
    addCropPreviewContainerStyle,
    addCropPreviewStyle,
    addOneImgUploadStyle
  } = props;

  // MediaInput - className

  let {
    selectedFilesAbsoluteContainerClassName,
    selectedFilesRelativeContainerClassName,
    selectedFilesContentClassName,
    selectedFilesTitleTextClassName,
    selectedFilesFootnoteTextClassName,
    imgPreviewAndCropContainerClassName,
    cancelButtonClassName,
    uploadButtonClassName,
    cropPreviewContainerClassName,
    cropPreviewClassName,
    oneImgUploadClassName
  } = props;

  // MediaInput - addClassName

  let {
    addSelectedFilesAbsoluteContainerClassName,
    addSelectedFilesRelativeContainerClassName,
    addSelectedFilesContentClassName,
    addSelectedFilesTitleTextClassName,
    addSelectedFilesFootnoteTextClassName,
    addImgPreviewAndCropContainerClassName,
    addCancelButtonClassName,
    addUploadButtonClassName,
    addCropPreviewContainerClassName,
    addCropPreviewClassName,
    addOneImgUploadClassName
  } = props;

  // MediaInput - conditionals

  let {
    showTitle,
    showFootnote,
    cropImage,
    showCropPreview,
    circledCropPreview,
    outsideButtons
  } = props;

  // MediaInput - options

  let {
    fileType,
    dropzoneType,
    selectedFilesTitleText,
    selectedFilesFootnoteText,
    cancelButtonText,
    uploadButtonText,
    buttonsDirection
  } = props;

  // MediaInput - callbacks

  let { uploadFileHandler, uploadSuccessCb, uploadErrorCb } = props;

  // MediaInput - children

  let { cancelBtnChildren, uploadBtnChildren } = props;

  // DropzoneInput -------------------------------------------------------------

  // DropzoneInput - most relevant

  // DropzoneInput - styles

  let { dropzoneContainerStyle, dropzoneStyle } = props;

  // DropzoneInput - addStyles

  let { addDropzoneContainerStyle, addDropzoneStyle } = props;

  // DropzoneInput - className

  let { dropzoneContainerClassName, dropzoneClassName } = props;

  // DropzoneInput - addClassName

  let { addDropzoneContainerClassName, addDropzoneClassName } = props;

  // DropzoneInput - conditionals

  let { multipleFiles, animateDrop } = props;

  // DropzoneInput - options

  let {
    fileExtensions,
    minBytesFileSize,
    maxBytesFileSize,
    dropzoneTextA,
    dropzoneTextB
  } = props;

  // DropzoneInput - callbacks

  const { fileUploadCb } = props;

  // DropzoneInput - children

  let { dropzoneChildrenA, dropzoneChildrenB } = props;

  // CropperInput --------------------------------------------------------------

  let { cropInputHeight } = props;

  // CropperInput - most relevant

  const {
    aspectRatio,
    dragMode,
    guides,
    scalable,
    rotatable,
    cropBoxMovable,
    cropBoxResizable
  } = props;

  // CropperInput - styles

  // CropperInput - addStyles

  // CropperInput - className

  // CropperInput - addClassName

  // CropperInput - conditionals

  // CropperInput - options

  // CropperInput - callbacks

  // CropperInput - children

  // FilesList -----------------------------------------------------------------

  // FilesList - most relevant

  // FilesList - styles

  const {
    filesListContainerStyle,
    filesListItemStyle,
    listItemFilePreviewContainerStyle,
    listItemFilePreviewStyle,
    listItemFileInfoContainerStyle,
    listItemFileInfoStyle
  } = props;

  // FilesList - addStyles

  const {
    addFilesListContainerStyle,
    addFilesListItemStyle,
    addListItemFilePreviewContainerStyle,
    addListItemFilePreviewStyle,
    addListItemFileInfoContainerStyle,
    addListItemFileInfoStyle
  } = props;

  // FilesList - className

  const {
    filesListContainerClassName,
    filesListItemClassName,
    listItemFilePreviewContainerClassName,
    listItemFilePreviewClassName,
    listItemFileInfoContainerClassName,
    listItemFileInfoClassName
  } = props;

  // FilesList - addClassName

  const {
    addFilesListContainerClassName,
    addFilesListItemClassName,
    addListItemFilePreviewContainerClassName,
    addListItemFilePreviewClassName,
    addListItemFileInfoContainerClassName,
    addListItemFileInfoClassName
  } = props;

  // FilesList - conditionals

  const { showFilesList } = props;

  const {
    showFileInfo,
    showFileName,
    showFilePath,
    showFilePreview,
    showFileSize,
    showFileType,
    showFileIconType
  } = props;

  // FilesList - options

  const { filePreviewPos, fileInfoPos } = props;

  // FilesList - callbacks

  // FilesList - children

  // ---------------------------------------------------------------------------

  // Conditional change of options...
  if (fileType === "files") {
    cropImage = false;
  }
  if (multipleFiles === true) {
    cropImage = false;
  }
  if (cropImage === false) {
    showCropPreview = false;
  }
  if (circledCropPreview === true) {
    // should force aspect ratio to 1:1
  }

  // if (singleImage or something like that, profile pic) {
  //   cropImage === false
  //   showFilesList === false
  //   multipleFiles === false
  // }

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const isFiles = files.length > 0 ? true : false;

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const handleFileUploadCb = (code, meta) => {
    if (fileUploadCb !== null || fileUploadCb !== undefined) {
      fileUploadCb(code, meta);
    }
  };

  const handleUploadFile = async () => {
    let code = "";

    if (fileType === "image" && cropImage === true) {
      // uploading file...
      code = cbCodes.fileUploadInProcess;
      handleFileUploadCb(code, { fileNum: 1, totalFiles: 1 });
      //
      try {
        await uploadFileHandler(image, files[0].name);
        // file uploaded √
        code = cbCodes.fileUploadSuccess;
        handleFileUploadCb(code, { fileNum: 1, totalFiles: 1 });
      } catch (error) {
        // file upload failed X
        code = cbCodes.fileUploadError;
        handleFileUploadCb(code, {
          error,
          fileNum: 1,
          totalFiles: 1
        });
      }
    }

    if (fileType === "image" && cropImage === false) {
      await files.map(async (file, index) => {
        // uploading file...
        code = cbCodes.fileUploadInProcess;
        handleFileUploadCb(code, {
          fileNum: index + 1,
          totalFiles: files.length
        });
        //
        try {
          await uploadFileHandler(file, file.name);
          // file uploaded √
          code = cbCodes.fileUploadSuccess;
          handleFileUploadCb(code, {
            fileNum: index + 1,
            totalFiles: files.length
          });
        } catch (error) {
          // file upload failed X
          code = cbCodes.fileUploadError;
          handleFileUploadCb(code, {
            error,
            fileNum: index + 1,
            totalFiles: files.length
          });
        }
      });
    }

    if (fileType === "files") {
      await files.map(async (file, index) => {
        // uploading file...
        code = cbCodes.fileUploadInProcess;
        handleFileUploadCb(code, {
          fileNum: index + 1,
          totalFiles: files.length
        });
        //
        try {
          await uploadFileHandler(file, file.name);
          // file uploaded √
          code = cbCodes.fileUploadSuccess;
          handleFileUploadCb(code, {
            fileNum: index + 1,
            totalFiles: files.length
          });
        } catch (error) {
          // file upload failed X
          code = cbCodes.fileUploadError;
          handleFileUploadCb(code, {
            error,
            fileNum: index + 1,
            totalFiles: files.length
          });
        }
      });
    }

    handleCancelCrop();
  };

  const renderDropzoneInput = () => {
    if (dropzoneType === "dropbox") {
      if (
        typeof dropzoneContainerStyle === "undefined" ||
        dropzoneContainerStyle === null
      ) {
        dropzoneContainerStyle = styleObjects.dropzoneContainerStyle;
      }
      if (typeof dropzoneStyle === "undefined" || dropzoneStyle === null) {
        dropzoneStyle = styleObjects.dropzoneStyle;
      }
    }
    if (dropzoneType === "text") {
      if (
        typeof dropzoneContainerStyle === "undefined" ||
        dropzoneContainerStyle === null
      ) {
        dropzoneContainerStyle = {};
      }
      if (typeof dropzoneStyle === "undefined" || dropzoneStyle === null) {
        dropzoneStyle = styleObjects.dropzoneTextStyle;
      }
    }
    if (dropzoneType === "button") {
      if (
        typeof dropzoneContainerStyle === "undefined" ||
        dropzoneContainerStyle === null
      ) {
        dropzoneContainerStyle = styleObjects.dropzoneButtonContainerStyle;
      }
      if (typeof dropzoneStyle === "undefined" || dropzoneStyle === null) {
        dropzoneStyle = styleObjects.dropzoneButtonStyle;
      }
    }
    return (
      <div
        style={{ ...dropzoneContainerStyle, ...addDropzoneContainerStyle }}
        className={`${dropzoneContainerClassName} ${addDropzoneContainerClassName}`}
      >
        <DropzoneInput
          setFiles={setFiles}
          dropzoneStyle={{ ...dropzoneStyle, ...addDropzoneStyle }}
          dropzoneClassName={`${dropzoneClassName} ${addDropzoneClassName}`}
          multipleFiles={multipleFiles}
          fileExtensions={fileExtensions}
          minBytesFileSize={minBytesFileSize}
          maxBytesFileSize={maxBytesFileSize}
          animateDrop={animateDrop}
          dropzoneTextA={dropzoneTextA}
          dropzoneTextB={dropzoneTextB}
          dropzoneChildrenA={dropzoneTextA}
          dropzoneChildrenB={dropzoneTextB}
          fileUploadCb={fileUploadCb}
        />
      </div>
    );
  };

  const renderButtons = () => {
    let separatorStyle = {};
    if (buttonsDirection === "column") {
      separatorStyle = { height: "10px" };
    }
    if (buttonsDirection === "row") {
      separatorStyle = { width: "20px" };
    }

    return (
      <div style={{ display: "flex", flexDirection: buttonsDirection }}>
        <button
          onClick={handleCancelCrop}
          style={{ ...cancelButtonStyle, ...addCancelButtonStyle }}
          className={`${cancelButtonClassName} ${addCancelButtonClassName}`}
        >
          {cancelButtonText}
        </button>
        <div style={separatorStyle} />
        <button
          onClick={handleUploadFile}
          style={{ ...uploadButtonStyle, ...addUploadButtonStyle }}
          className={`${uploadButtonClassName} ${addUploadButtonClassName}`}
        >
          {uploadButtonText}
        </button>
      </div>
    );
  };

  const renderInputContent = () => {
    // console.log("files");
    // console.log(files);

    return (
      <div>
        {/* RENDER INPUT TYPE ********************************=************* */}
        {renderDropzoneInput()}

        {/* RENDER SELECTED CONTENT ********************************=******* */}

        {files.length > 0 && (
          <div
            style={{
              ...selectedFilesAbsoluteContainerStyle,
              ...addSelectedFilesAbsoluteContainerStyle
            }}
            className={`${selectedFilesAbsoluteContainerClassName} ${addSelectedFilesAbsoluteContainerClassName}`}
          >
            <div
              style={{
                ...selectedFilesRelativeContainerStyle,
                ...addSelectedFilesRelativeContainerStyle
              }}
              className={`${selectedFilesRelativeContainerClassName} ${addSelectedFilesRelativeContainerClassName}`}
            >
              <div
                style={{
                  ...selectedFilesContentStyle,
                  ...addSelectedFilesContentStyle
                }}
                className={`${selectedFilesContentClassName} ${addSelectedFilesContentClassName}`}
              >
                {/* TITLE TEXT ***********************************=********* */}
                {showTitle === true && (
                  <p
                    style={{
                      ...selectedFilesTitleTextStyle,
                      ...addSelectedFilesTitleTextStyle
                    }}
                    className={`${selectedFilesTitleTextClassName} ${addSelectedFilesTitleTextClassName}`}
                  >
                    {selectedFilesTitleText}
                  </p>
                )}

                {/* RENDER CROP INPUT ****************************=********* */}
                {cropImage === true && (
                  <div
                    style={{
                      ...imgPreviewAndCropContainerStyle,
                      ...addImgPreviewAndCropContainerStyle
                    }}
                    className={`${imgPreviewAndCropContainerClassName} ${addImgPreviewAndCropContainerClassName}`}
                  >
                    {/* RENDER CROPPED IMAGE PREVIEW *********************** */}
                    {showCropPreview === true && (
                      <div
                        style={{
                          // ...{
                          //   width: "100%",
                          //   height: cropPreviewHeight, // this is the real imgPreview height
                          //   display: "flex",
                          //   flexDirection: "column",
                          //   justifyContent: "center",
                          //   alignItems: "center"
                          // },
                          ...cropPreviewContainerStyle,
                          ...{ height: cropPreviewHeight },
                          ...addCropPreviewContainerStyle
                        }}
                        className={`${cropPreviewContainerClassName} ${addCropPreviewContainerClassName}`}
                      >
                        <div
                          className="img-preview"
                          style={{
                            // ...{
                            //   // Dont change this styles
                            //   overflow: "hidden",
                            //   //
                            //   width: "500px",
                            //   height: "200px",
                            //   minWidth: "1px",
                            //   minHeight: "1px",
                            //   maxWidth: "100%",
                            //   maxHeight: "100%",
                            //   width: "100%",
                            //   height: "100%",
                            //   // BORDER
                            //   borderStyle: "solid",
                            //   borderWidth: "1px",
                            //   borderRadius: "10px",
                            //   borderColor: "black"
                            //   //
                            //   // backgroundSize: "contain",
                            //   // backgroundRepeat: "no-repeat",
                            //   // backgroundPosition: "center center",
                            // },
                            ...cropPreviewStyle,
                            ...{
                              borderRadius: circledCropPreview ? "500px" : "",
                              minWidth: circledCropPreview ? "10px" : "",
                              minHeight: circledCropPreview ? "10px" : "",
                              maxWidth: circledCropPreview ? "2000px" : "",
                              maxHeight: circledCropPreview ? "2000px" : ""
                            },
                            ...addCropPreviewStyle
                          }}
                          className={`${cropPreviewClassName} ${addCropPreviewClassName}`}
                        />
                      </div>
                    )}

                    {cropImage === true && <br />}

                    {/* RENDER CROPPER ************************************* */}
                    <CropperInput
                      setImage={setImage}
                      imagePreview={files.length > 0 ? files[0].preview : ""}
                      cropInputHeight={cropInputHeight}
                      aspectRatio={aspectRatio}
                      dragMode={dragMode}
                      guides={guides}
                      scalable={scalable}
                      rotatable={rotatable}
                      cropBoxMovable={cropBoxMovable}
                      cropBoxResizable={cropBoxResizable}
                    />
                  </div>
                )}

                {/* RENDER FILES LIST ************************************** */}
                {cropImage === false && showFilesList === true && (
                  <div style={{ width: "100%" }}>
                    {files.length > 0 && (
                      <div style={{ width: "100%" }}>
                        <FilesList
                          files={files}
                          showFileInfo={showFileInfo}
                          showFileName={showFileName}
                          showFilePath={showFilePath}
                          showFilePreview={showFilePreview}
                          showFileSize={showFileSize}
                          showFileType={showFileType}
                          showFileIconType={showFileIconType}
                          filePreviewPos={filePreviewPos}
                          fileInfoPos={fileInfoPos}
                          //
                          filesListContainerClassName={
                            filesListContainerClassName
                          }
                          filesListItemClassName={filesListItemClassName}
                          listItemFilePreviewContainerClassName={
                            listItemFilePreviewContainerClassName
                          }
                          listItemFilePreviewClassName={
                            listItemFilePreviewClassName
                          }
                          listItemFileInfoContainerClassName={
                            listItemFileInfoContainerClassName
                          }
                          listItemFileInfoClassName={listItemFileInfoClassName}
                          addFilesListContainerClassName={
                            addFilesListContainerClassName
                          }
                          //
                          addFilesListItemClassName={addFilesListItemClassName}
                          addListItemFilePreviewContainerClassName={
                            addListItemFilePreviewContainerClassName
                          }
                          addListItemFilePreviewClassName={
                            addListItemFilePreviewClassName
                          }
                          addListItemFileInfoContainerClassName={
                            addListItemFileInfoContainerClassName
                          }
                          addListItemFileInfoClassName={
                            addListItemFileInfoClassName
                          }
                        />
                      </div>
                    )}
                  </div>
                )}

                {cropImage === false &&
                  showFilesList === false &&
                  multipleFiles === false && (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "lightGray"
                      }}
                    >
                      <img
                        style={{
                          ...oneImgUploadStyle,
                          ...addOneImgUploadStyle
                        }}
                        className={`${oneImgUploadClassName} ${addOneImgUploadClassName}`}
                        src={files[0].preview}
                      />
                    </div>
                  )}

                {/* FOOTNOTE *************************************=********* */}
                {showFootnote === true && (
                  <p
                    style={{
                      ...selectedFilesFootnoteTextStyle,
                      ...addSelectedFilesFootnoteTextStyle
                    }}
                    className={`${selectedFilesFootnoteTextClassName} ${addSelectedFilesFootnoteTextClassName}`}
                  >
                    <br />
                    {selectedFilesFootnoteText}
                    <br />
                  </p>
                )}

                {/* BUTTONS INSIDE SELECTED CONTENT BOX **********=********* */}
                {outsideButtons === false && (
                  <div style={{ display: "flex" }}>{renderButtons()}</div>
                )}
              </div>

              {/* BUTTONS OUTSIDE SELECTED CONTENT BOX ********************* */}
              {outsideButtons === true && (
                <div style={{ marginTop: "20px" }}>{renderButtons()}</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderInputContent()}</div>;
};

MediaInput.defaultProps = {
  //
  // most relevant
  //
  // backgroundColor: "rgba(255, 255, 255, 0.0)",
  //
  cropPreviewHeight: "200px",
  cropInputHeight: 300,
  //
  // MediaInput ----------------------------------------------------------------
  //
  // most relevant
  //
  // baseN
  // I.E.: "inputMediaTypeN" "baseStyleN"
  // Set baseN to 0, eliminates the baseStyle, sets an empty object {}
  //
  // styles
  //
  selectedFilesAbsoluteContainerStyle:
    styleObjects.selectedFilesAbsoluteContainerStyle,
  selectedFilesRelativeContainerStyle:
    styleObjects.selectedFilesRelativeContainerStyle,
  selectedFilesContentStyle: styleObjects.selectedFilesContentStyle,
  selectedFilesTitleTextStyle: styleObjects.selectedFilesTitleTextStyle,
  selectedFilesFootnoteTextStyle: styleObjects.selectedFilesFootnoteTextStyle,
  imgPreviewAndCropContainerStyle: styleObjects.imgPreviewAndCropContainerStyle,
  cancelButtonStyle: styleObjects.cancelButtonStyle,
  uploadButtonStyle: styleObjects.uploadButtonStyle,
  cropPreviewContainerStyle: styleObjects.cropPreviewContainerStyle,
  cropPreviewStyle: styleObjects.cropPreviewStyle,
  oneImgUploadStyle: styleObjects.oneImgUploadStyle,
  //
  // addStyles
  //
  addSelectedFilesAbsoluteContainerStyle: {},
  addSelectedFilesRelativeContainerStyle: {},
  addSelectedFilesContentStyle: {},
  addSelectedFilesTitleTextStyle: {},
  addSelectedFilesFootnoteTextStyle: {},
  addImgPreviewAndCropContainerStyle: {},
  addCancelButtonStyle: {},
  addUploadButtonStyle: {},
  addCropPreviewContainerStyle: {},
  addCropPreviewStyle: {},
  //
  addDropzoneContainerStyle: {},
  addDropzoneStyle: {},
  //
  // options
  //
  dropzoneType: "button", // "dropbox", "text", "button"
  fileType: "image", // "image", "files"
  selectedFilesTitleText: "PREVIEW SELECTED FILES",
  selectedFilesFootnoteText: "* By default, max file size accepted is 1GB.",
  cancelButtonText: "CANCEL",
  uploadButtonText: "UPLOAD",
  buttonsDirection: "row", // "row" "column"
  //
  // conditionals
  //
  showTitle: true,
  showFootnote: true,
  cropImage: true, // true, false
  showCropPreview: true, // true, false
  circledCropPreview: true, // true, false
  outsideButtons: false, // true, false
  //
  // callbacks
  //
  // children
  //
  // DropzoneInput -------------------------------------------------------------
  //
  // most relevant
  //
  // baseN
  //
  // styles
  //
  dropzoneTextAStyle: {},
  dropzoneTextBStyle: {},
  //
  // addStyles
  //
  addDropzoneTextAStyle: {},
  addDropzoneTextBStyle: {},
  //
  // conditionals
  //
  // multipleFiles: false // true, false
  // animateDrop: true,
  //
  // options
  //
  // fileExtensions:
  //   "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // // min and max file size in bytes (1 Megabyte = 1048576 Bytes)
  // minBytesFileSize: 0,
  // maxBytesFileSize: 1048576000, // 1000 * 1048576 = 1GB
  // dropzoneTextA:
  //   "index.js - Drag 'n' drop some files here, or click to select files",
  // dropzoneTextB: "index.js - Drop the files here...",
  //
  // callbacks
  //
  // children
  //
  // dropzoneChildrenA: null,
  // dropzoneChildrenB: null
  //
  // CropperInput --------------------------------------------------------------
  //
  // most relevant
  //
  // baseN
  //
  // styles
  //
  // addStyles
  //
  // conditionals
  //
  // options
  //
  // callbacks
  //
  // children
  //
  // FilesList --------------------------------------------------------------
  //
  // most relevant
  //
  // baseN
  //
  // styles
  //
  // addStyles
  //
  // conditionals
  //
  // options
  //
  showFilesList: true
  //
  // callbacks
  //
  // children
};

export default MediaInput;
