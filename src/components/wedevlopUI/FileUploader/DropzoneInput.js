// Documentation
// https://react-dropzone.netlify.com/
// https://github.com/react-dropzone/react-dropzone

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import defaultStyles from "./styles/defaultStyles.js";
import defaultClassNames from "./styles/defaultClassNames.js";

import cbCodes from "./cbCodes";

// const DropzoneInput = ({ setFiles, dropzone, children }) => {
const DropzoneInput = props => {
  const style = { ...defaultStyles.style, ...props.style };
  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };
  const className = { ...defaultClassNames.className, ...props.className };
  const addClassName = {
    ...defaultClassNames.addClassName,
    ...props.addClassName
  };

  const { dropzoneStyle, dropzoneClassName } = props;

  // DropzoneInput - most relevant

  const { setFiles } = props;

  // DropzoneInput - conditionals

  const { multipleFiles, animateDrop } = props;

  // DropzoneInput - options

  const {
    fileExtensions,
    minBytesFileSize,
    maxBytesFileSize,
    dropzoneTextA,
    dropzoneTextB
  } = props;

  // DropzoneInput - callbacks

  const { fileUploadCb } = props;

  // DropzoneInput - children

  const { children } = props;
  const { dropzoneChildrenA, dropzoneChildrenB } = props;

  const onDrop = useCallback(
    acceptedFiles => {
      // Files Not Accepted

      if (acceptedFiles && acceptedFiles.length === 0) {
        if (fileUploadCb !== null) {
          let code = cbCodes.wrongFileRequirements;
          fileUploadCb(code, { fileNum: 0, totalFiles: 0 });
        }
      }

      // Files Accepted

      // acceptedFiles.forEach(file => {
      //   const reader = new FileReader();
      //
      //   reader.onabort = () => console.log("file reading was aborted");
      //   reader.onerror = () => console.log("file reading has failed");
      //   reader.onerror = error => console.log(error);
      //   reader.onload = () => {
      //     // Do whatever you want with the file contents
      //     const binaryStr = reader.result;
      //     console.log(binaryStr);
      //   };
      //   reader.readAsArrayBuffer(file);
      // });

      // Do something with the accepted files
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFiles] // setFiles dependency specified here, but it might be added automatically in the future
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    //
    // multiple: true, // To accept only 1 file
    // // accept: "image/*"
    // accept:
    //   "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    // // min and max file size in bytes (1 Megabyte = 1048576 Bytes)
    // minSize: 0,
    // maxSize: 1048576000
    //
    multiple: multipleFiles,
    accept: fileExtensions,
    minSize: minBytesFileSize,
    maxSize: maxBytesFileSize
  });

  const renderElementA = () => {
    if (dropzoneChildrenA === null) {
      return (
        <div
          style={{
            ...style.dropzoneTextA,
            ...addStyle.dropzoneTextA
          }}
          className={`${className.dropzoneTextA} ${addClassName.dropzoneTextA}`}
        >
          {dropzoneTextA}
        </div>
      );
    } else {
      return <div>{dropzoneChildrenA}</div>;
    }
  };

  const renderElementB = () => {
    if (dropzoneChildrenB === null) {
      return (
        <div
          style={{
            ...style.dropzoneTextB,
            ...addStyle.dropzoneTextB
          }}
          className={`${className.dropzoneTextB} ${addClassName.dropzoneTextB}`}
        >
          {dropzoneTextB}
        </div>
      );
    } else {
      return <div>{dropzoneChildrenB}</div>;
    }
  };

  const renderElements = () => {
    if (animateDrop === true && isDragActive === false) {
      return <div>{renderElementA()}</div>;
    }
    if (animateDrop === true && isDragActive === true) {
      return <div>{renderElementB()}</div>;
    }
    // if animateDrop is false, we dont care if isDragActive is true or false,
    // cause we would only show elementA no matter what
    return <div>{renderElementA()}</div>;
  };

  return (
    <div
      {...getRootProps()}
      style={dropzoneStyle}
      className={dropzoneClassName}
    >
      <input {...getInputProps()} />
      {renderElements()}
      {children}
    </div>
  );
};

DropzoneInput.defaultProps = {
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  dropzoneStyle: {},
  dropzoneClassName: "",
  //
  // backgroundColor: "rgba(255, 255, 255, 0.0)",
  // dropzone: {},
  //
  // conditionals
  //
  multipleFiles: false, // true, false
  animateDrop: true,
  //
  // options
  //
  fileExtensions:
    "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // min and max file size in bytes (1 Megabyte = 1048576 Bytes)
  minBytesFileSize: 0,
  // maxBytesFileSize: 10000000, // 1mb
  // maxBytesFileSize: 100000000, // 10mb
  maxBytesFileSize: 1000000000, // 100mb
  // maxBytesFileSize: 10000000000, // 1000mb
  // maxBytesFileSize: 10048576000, // 1000 * 1048576 = 1048576000 B or 1GB
  dropzoneTextA:
    "DropzoneInput.js - Drag 'n' drop some files here, or click to select files",
  dropzoneTextB: "DropzoneInput.js - Drop the files here...",
  //
  // callbacks
  //
  fileUploadCb: null,
  //
  // children
  //
  dropzoneChildrenA: null,
  dropzoneChildrenB: null
  //
};

export default DropzoneInput;
