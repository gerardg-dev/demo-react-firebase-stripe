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
// CropImage cancel button
// CropImage upload button
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
// accept multiple files ?
// image crop aspect ratio square or free resize
//
// Text:
// Drop files input text
// Cancel Upload Button Text
// Upload Button Text
//
// -----------------------------------------------------------------------------
//
// options:
// media type: image, video, document, zip
// accept media types:
// "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
// image fixed size?
// image minmax for width and height
// image resize content options, cover, expamd, fit, centered, etc...
// min and max width amd height
// pass content text for buttons or instructions
//
// All CropperInput Cropper compnent props, make editable
//

import React, { useState, useEffect } from "react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MediaInput = props => {
  // destructure props needed for CropperInput
  // destructure props needed for DropzoneInput
  const { uploadFileHandler } = props;

  const { addSomeStyle } = props;

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

  const handleUploadFile = async () => {
    try {
      await uploadFileHandler(image, files[0].name);
      handleCancelCrop();
    } catch (error) {
      console.log("Error Uploading File");
    }
  };

  const renderCropContent = () => {
    // if (isFiles) {
    //   return (
    //     <img
    //       src={files[0].preview}
    //       style={{
    //         minWidth: "200px",
    //         minHeight: "200px",
    //         maxWidth: "200px",
    //         maxHeight: "200px"
    //       }}
    //     ></img>
    //   );
    // }
    return (
      <div
        style={{
          minWidth: "600px",
          minHeight: "200px",
          backgroundColor: "lightGray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "none",
          borderRadius: "30px"
        }}
      >
        {/*
          <img
            src={files.length > 0 ? files[0].preview : ""}
            // className="img-preview"
            style={styleObjects.imgPreviewStyle}
          ></img>
        */}
        <DropzoneInput
          setFiles={setFiles}
          customStyle={styleObjects.dropzoneInputStyle}
        >
          {
            // "Drop Content Here or Click to Select File"
          }
        </DropzoneInput>

        <div
          style={{
            backgroundColor: "lightGreen",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "none",
            borderRadius: "30px",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          {files.length > 0 && (
            <div
              className="img-preview"
              style={styleObjects.imgCropPreviewStyle}
            />
          )}
          <br />
          {files.length > 0 && (
            <CropperInput
              setImage={setImage}
              imagePreview={files.length > 0 ? files[0].preview : ""}
            />
          )}
          <br />
          {files.length > 0 && (
            <div>
              <button
                onClick={handleCancelCrop}
                style={styleObjects.cancelUploadButtonStyle}
              >
                Cancel
              </button>
              <button
                onClick={handleUploadFile}
                style={styleObjects.uploadButtonStyle}
              >
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // if (isFiles) {
    //   return (
    //     <img
    //       src={files[0].preview}
    //       style={{
    //         minWidth: "200px",
    //         minHeight: "200px",
    //         maxWidth: "200px",
    //         maxHeight: "200px"
    //       }}
    //     ></img>
    //   );
    // }
    return (
      <div style={{ minWidth: "200px", minHeight: "200px" }}>
        <img
          src={files.length > 0 ? files[0].preview : ""}
          style={styleObjects.uploadedMediaContainerStyle}
        ></img>
        <DropzoneInput
          setFiles={setFiles}
          customStyle={styleObjects.dropzoneInputStyle2}
        >
          {"Drop Content Here or Click to Select File"}
        </DropzoneInput>
      </div>
    );
  };

  return (
    <div>
      {
        // renderContent()
      }
      <div style={{ height: "50px" }}></div>
      {renderCropContent()}
      {/*
        files.length > 0 && (
        <img
          src={files[0].preview}
          style={{ minWidth: "200px", minHeight: "200px" }}
        />
        // Add Remove img Button
      )
      */}
    </div>
  );
};

MediaInput.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 0.0)"
};

export default MediaInput;
