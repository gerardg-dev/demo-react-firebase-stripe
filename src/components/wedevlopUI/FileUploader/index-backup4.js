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

let inputType = "dropzone"; // dropzone, text, button.
// should text change on drag? accept text to show, and text in case it changes on drop.
let uploadType = "files"; // "image" "files"
let isImgCropEnabled = "false";

const MediaInput = props => {
  // destructure props needed for CropperInput
  // destructure props needed for DropzoneInput
  const { uploadFileHandler } = props;

  const { addSomeStyle } = props;

  // Conditional change of options...
  if (uploadType === "files") {
    isImgCropEnabled = "false";
  }

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
      if (uploadType === "image" && isImgCropEnabled === "true") {
        await uploadFileHandler(image, files[0].name);
      }
      if (uploadType === "image" && isImgCropEnabled === "false") {
        await files.map(async file => {
          await uploadFileHandler(file, file.name);
          // file uploaded
        });
      }
      if (uploadType === "files") {
        await files.map(async file => {
          await uploadFileHandler(file, file.name);
          // file uploaded
        });
      }
      handleCancelCrop();
    } catch (error) {
      console.log("Error Uploading File");
    }
  };

  const renderInputContent = () => {
    console.log("Check files ********");
    console.log(files);

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
      <div>
        {/*
        <img
          src={files.length > 0 ? files[0].preview : ""}
          // className="img-preview"
          style={{
            backgroundColor: "gray",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "200px",
            maxHeight: "200px",
            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            //
            overflow: "hidden"
          }}
        ></img>
        */}

        {inputType === "dropzone" && (
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
              borderRadius: "20px"
            }}
          >
            <DropzoneInput
              setFiles={setFiles}
              customStyle={styleObjects.dropzoneInputStyle}
            />
          </div>
        )}

        {inputType === "text" && (
          <div
            style={
              {
                // minWidth: "600px",
                // minHeight: "200px",
                // backgroundColor: "lightGray",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                // borderStyle: "none",
                // borderRadius: "20px"
              }
            }
          >
            <DropzoneInput
              setFiles={setFiles}
              customStyle={{
                color: "lightGreen",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            />
          </div>
        )}

        {inputType === "button" && (
          <div
            style={{
              minWidth: "80px",
              minHeight: "20px",
              backgroundColor: "lightGray",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "none",
              borderRadius: "6px"
            }}
          >
            <DropzoneInput
              setFiles={setFiles}
              customStyle={{
                color: "white",
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px"
              }}
            />
          </div>
        )}

        {files.length > 0 && (
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
            {isImgCropEnabled === "true" && (
              <div>
                <div
                  className="img-preview"
                  style={styleObjects.imgCropPreviewStyle}
                />
                <br />
                <CropperInput
                  setImage={setImage}
                  imagePreview={files.length > 0 ? files[0].preview : ""}
                />
                <br />
              </div>
            )}

            {isImgCropEnabled === "false" && (
              <div>
                {files.length > 0 && (
                  <div>
                    <FilesList files={files} />
                    <br />
                  </div>
                )}
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                onClick={handleCancelCrop}
                style={styleObjects.cancelUploadButtonStyle}
              >
                Cancel
              </button>
              <div style={{ width: "20px" }}></div>
              <button
                onClick={handleUploadFile}
                style={styleObjects.cancelUploadButtonStyle}
              >
                Upload
              </button>
              <br />
            </div>
          </div>
        )}
      </div>
    );
  };

  // const renderContent = () => {
  //   // if (isFiles) {
  //   //   return (
  //   //     <img
  //   //       src={files[0].preview}
  //   //       style={{
  //   //         minWidth: "200px",
  //   //         minHeight: "200px",
  //   //         maxWidth: "200px",
  //   //         maxHeight: "200px"
  //   //       }}
  //   //     ></img>
  //   //   );
  //   // }
  //   return (
  //     <div style={{ minWidth: "200px", minHeight: "200px" }}>
  //       <img
  //         src={files.length > 0 ? files[0].preview : ""}
  //         style={{
  //           backgroundColor: "gray",
  //           minWidth: "200px",
  //           minHeight: "200px",
  //           maxWidth: "200px",
  //           maxHeight: "200px",
  //           backgroundSize: "contain",
  //           backgroundRepeat: "no-repeat",
  //           backgroundPosition: "center center"
  //         }}
  //       ></img>
  //       <DropzoneInput
  //         setFiles={setFiles}
  //         customStyle={{
  //           backgroundColor: "rgba(255, 255, 255, 0.0)",
  //           // backgroundColor: "blue",
  //           color: "white",
  //           width: "200px",
  //           height: "50px",
  //           borderStyle: "solid",
  //           borderRadius: "10px",
  //           borderColor: "blue"
  //         }}
  //       >
  //         {"Drop Content Here or Click to Select File"}
  //       </DropzoneInput>
  //     </div>
  //   );
  // };

  return (
    <div>
      {
        // renderContent()
      }
      // <div style={{ height: "50px" }}></div>
      {renderInputContent()}
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
  // backgroundColor: "rgba(255, 255, 255, 0.0)",
};

export default MediaInput;
