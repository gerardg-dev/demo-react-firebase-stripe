import React, { Component, createRef } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import cbCodes from "./cbCodes";

// if show file preview, then show to divs...

class FilesList extends Component {
  // renderFilePreview = (showFilePreview, filePreviewPos, fileInfoPos) => {
  renderFilePreview = (file, options, styles, classNames) => {
    return (
      <div
        style={{
          ...styles.listItemFilePreviewContainerStyle,
          ...styles.addListItemFilePreviewContainerStyle
        }}
        className={`${classNames.listItemFilePreviewContainerClassName} ${classNames.addListItemFilePreviewContainerClassName}`}
      >
        {/* img, for jpeg */}
        {file.type === "image/jpeg" && (
          <img
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
            src={file.preview}
          />
        )}
        {/* img, for jpg */}
        {file.type === "image/jpg" && (
          <img
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
            src={file.preview}
          />
        )}
        {/* img, for png */}
        {file.type === "image/png" && (
          <img
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
            src={file.preview}
          />
        )}
        {/* iFrame, for PDFs */}
        {file.type === "application/pdf" && (
          <iframe
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
            src={file.preview}
          />
        )}
        {file.type === "video/quicktime" && (
          <div
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
          >
            <source src={file.preview} type="video/quicktime" />
            <video poster={file.preview} />
          </div>
        )}
        {file.type === "video/mp4" && (
          <div
            style={{
              ...styles.listItemFilePreviewStyle,
              ...styles.addListItemFilePreviewStyle
            }}
            className={`${classNames.listItemFilePreviewClassName} ${classNames.addListItemFilePreviewClassName}`}
          >
            <source src={file.preview} type="video/mp4" />
            <video poster={file.preview} />
          </div>
        )}
        {file.type === "video/mp3" && <div></div>}
      </div>
    );
  };

  // renderFileInfo = (fileInfoPos) => {
  renderFileInfo = (file, options, styles, classNames) => {
    const formatFileSize = (bytesFileSize, fileSizeFormat) => {
      if (fileSizeFormat === null || fileSizeFormat === undefined) {
        let division;
        division = bytesFileSize / 1000; // KB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " KB";
        }
        division = bytesFileSize / 1000000; // MB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " MB";
        }
        division = bytesFileSize / 1000000000; // GB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " GB";
        }
      }
      if (fileSizeFormat === "KB") {
        return bytesFileSize / 1000;
      }
      if (fileSizeFormat === "MB") {
        return bytesFileSize / 1000000;
      }
      if (fileSizeFormat === "GB") {
        return bytesFileSize / 1000000000;
      }
    };

    let centerLayoutStyle = {};
    //
    // column - top
    //
    if (options.fileInfoPos === "topLeft") {
      centerLayoutStyle = styleObjects.topLeftColumnContentStyle;
    }
    if (options.fileInfoPos === "topCenter") {
      centerLayoutStyle = styleObjects.topCenterColumnContentStyle;
    }
    if (options.fileInfoPos === "topRight") {
      centerLayoutStyle = styleObjects.topRightColumnContentStyle;
    }
    //
    // column - center
    //
    if (options.fileInfoPos === "centerLeft") {
      centerLayoutStyle = styleObjects.centerLeftColumnContentStyle;
    }
    if (options.fileInfoPos === "center") {
      centerLayoutStyle = styleObjects.centerColumnContentStyle;
    }
    if (options.fileInfoPos === "centerRight") {
      centerLayoutStyle = styleObjects.centerRightColumnContentStyle;
    }
    //
    // column - bottom
    //
    if (options.fileInfoPos === "bottomLeft") {
      centerLayoutStyle = styleObjects.bottomLeftColumnContentStyle;
    }
    if (options.fileInfoPos === "bottomCenter") {
      centerLayoutStyle = styleObjects.bottomCenterColumnContentStyle;
    }
    if (options.fileInfoPos === "bottomRight") {
      centerLayoutStyle = styleObjects.bottomRightColumnContentStyle;
    }

    return (
      <div
        style={{
          ...centerLayoutStyle,
          ...styles.listItemFileInfoContainerStyle,
          ...styles.addListItemFileInfoContainerStyle
        }}
        className={`${classNames.listItemFileInfoContainerClassName} ${classNames.addListItemFileInfoContainerClassName}`}
      >
        {options.showFileName === true && (
          <p
            style={{
              ...styles.listItemFileInfoStyle,
              ...styles.addListItemFileInfoStyle
            }}
            className={`${classNames.listItemFileInfoClassName} ${classNames.addListItemFileInfoClassName}`}
          >
            {file.name}
          </p>
        )}
        {options.showFilePath === true && (
          <p
            style={{
              ...styles.listItemFileInfoStyle,
              ...styles.addListItemFileInfoStyle
            }}
            className={`${classNames.listItemFileInfoClassName} ${classNames.addListItemFileInfoClassName}`}
          >
            {file.path}
          </p>
        )}
        {
          // options.showFilePreview === true && (
          //   <p style={{ ...styles.listItemFileInfoStyle, ...styles.addListItemFileInfoStyle }}>{file.preview}</p>
          // )
        }
        {options.showFileSize === true && (
          <p
            style={{
              ...styles.listItemFileInfoStyle,
              ...styles.addListItemFileInfoStyle
            }}
            className={`${classNames.listItemFileInfoClassName} ${classNames.addListItemFileInfoClassName}`}
          >
            {formatFileSize(file.size)}
          </p>
        )}
        {options.showFileType === true && (
          <p
            style={{
              ...styles.listItemFileInfoStyle,
              ...styles.addListItemFileInfoStyle
            }}
            className={`${classNames.listItemFileInfoClassName} ${classNames.addListItemFileInfoClassName}`}
          >
            {file.type}
          </p>
        )}
      </div>
    );
  };

  renderFiles = (files, options, styles, classNames) => {
    if (files && files.length > 0) {
      return files.map((file, index) => {
        let addListItemBr = true;

        if (index === files.length - 1) {
          addListItemBr = false;
        }

        return (
          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <div
              key={index}
              style={{
                ...styles.filesListItemStyle,
                ...styles.addFilesListItemStyle
              }}
              className={`${classNames.filesListItemClass} ${classNames.addFilesListItemClassName}`}
            >
              {options.showFilePreview === true &&
                options.showFileInfo === true && (
                  <div
                    style={{
                      ...{
                        width: "100%",
                        height: "100%"
                      },
                      ...styleObjects.centerColumnContentStyle
                    }}
                  >
                    {options.filePreviewPos === "top" && (
                      <div
                        style={{
                          ...{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFilePreview(
                          file,
                          options,
                          styles,
                          classNames
                        )}
                        <div style={{ width: "0px", height: "10px" }} />
                        {this.renderFileInfo(file, options, styles, classNames)}
                      </div>
                    )}
                    {options.filePreviewPos === "bottom" && (
                      <div
                        style={{
                          ...{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFileInfo(file, options, styles, classNames)}
                        <div style={{ width: "0px", height: "10px" }} />
                        {this.renderFilePreview(
                          file,
                          options,
                          styles,
                          classNames
                        )}
                      </div>
                    )}
                    {options.filePreviewPos === "left" && (
                      <div
                        style={{
                          ...{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFilePreview(
                          file,
                          options,
                          styles,
                          classNames
                        )}
                        <div style={{ width: "10px", height: "0px" }} />
                        {this.renderFileInfo(file, options, styles, classNames)}
                      </div>
                    )}
                    {options.filePreviewPos === "right" && (
                      <div
                        style={{
                          ...{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFileInfo(file, options, styles, classNames)}
                        <div style={{ width: "10px", height: "0px" }} />
                        {this.renderFilePreview(
                          file,
                          options,
                          styles,
                          classNames
                        )}
                      </div>
                    )}
                  </div>
                )}

              {options.showFilePreview === true &&
                options.showFileInfo === false && (
                  <div
                    style={{
                      ...{
                        width: "100%",
                        height: "100%"
                      },
                      ...styleObjects.centerColumnContentStyle
                    }}
                  >
                    {this.renderFilePreview(file, options, styles, classNames)}
                  </div>
                )}

              {options.showFilePreview === false &&
                options.showFileInfo === true && (
                  <div
                    style={{
                      ...{ width: "100%", height: "100%" },
                      ...{},
                      ...styleObjects.centerColumnContentStyle
                    }}
                  >
                    {this.renderFileInfo(file, options, styles, classNames)}
                  </div>
                )}
            </div>
            {/* addListItemBr === true && <br /> */}
            {addListItemBr === true && (
              <div style={{ width: "0px", height: "10px" }} />
            )}
          </div>
        );
      });
    } else {
      return (
        <div>
          <p style={{ color: "white" }}>No Files Found</p>
        </div>
      );
    }
  };

  render() {
    // FilesList - most relevant

    const { files } = this.props;

    // FilesList - styles

    const {
      filesListContainerStyle,
      filesListItemStyle,
      listItemFilePreviewContainerStyle,
      listItemFilePreviewStyle,
      listItemFileInfoContainerStyle,
      listItemFileInfoStyle
    } = this.props;

    // FilesList - addStyles

    const {
      addFilesListContainerStyle,
      addFilesListItemStyle,
      addListItemFilePreviewContainerStyle,
      addListItemFilePreviewStyle,
      addListItemFileInfoContainerStyle,
      addListItemFileInfoStyle
    } = this.props;

    // FilesList - className

    const {
      filesListContainerClassName,
      filesListItemClassName,
      listItemFilePreviewContainerClassName,
      listItemFilePreviewClassName,
      listItemFileInfoContainerClassName,
      listItemFileInfoClassName
    } = this.props;

    // FilesList - addClassName

    const {
      addFilesListContainerClassName,
      addFilesListItemClassName,
      addListItemFilePreviewContainerClassName,
      addListItemFilePreviewClassName,
      addListItemFileInfoContainerClassName,
      addListItemFileInfoClassName
    } = this.props;

    // FilesList - conditionals

    let {
      showFileInfo,
      showFileName,
      showFilePath,
      showFilePreview,
      showFileSize,
      showFileType,
      showFileIconType
    } = this.props;

    // FilesList - options

    const { filePreviewPos, fileInfoPos } = this.props;

    // FilesList - callbacks

    // FilesList - children

    // fixes

    if (showFilePreview === true) {
      showFileIconType = false;
    }

    return (
      <div
        style={{
          ...filesListContainerStyle,
          ...{
            overflowY: files.length < 2 ? "hidden" : "scroll"
          },
          ...addFilesListContainerStyle
        }}
        className={`${filesListContainerClassName} ${addFilesListContainerClassName}`}
      >
        {this.renderFiles(
          files,
          {
            showFileInfo,
            showFileName,
            showFilePath,
            showFilePreview,
            showFileSize,
            showFileType,
            showFileIconType,
            filePreviewPos,
            fileInfoPos
          },
          {
            filesListContainerStyle,
            filesListItemStyle,
            listItemFilePreviewContainerStyle,
            listItemFilePreviewStyle,
            listItemFileInfoContainerStyle,
            listItemFileInfoStyle,
            //
            addFilesListContainerStyle,
            addFilesListItemStyle,
            addListItemFilePreviewContainerStyle,
            addListItemFilePreviewStyle,
            addListItemFileInfoContainerStyle,
            addListItemFileInfoStyle
          },
          {
            filesListContainerClassName,
            filesListItemClassName,
            listItemFilePreviewContainerClassName,
            listItemFilePreviewClassName,
            listItemFileInfoContainerClassName,
            listItemFileInfoClassName,
            //
            addFilesListContainerClassName,
            addFilesListItemClassName,
            addListItemFilePreviewContainerClassName,
            addListItemFilePreviewClassName,
            addListItemFileInfoContainerClassName,
            addListItemFileInfoClassName
          }
        )}
      </div>
    );
  }
}

FilesList.defaultProps = {
  //
  // most relevant
  //
  files: [],
  //
  // baseN
  //
  // styles
  //
  filesListContainerStyle: styleObjects.filesListContainerStyle,
  filesListItemStyle: styleObjects.filesListItemStyle,
  listItemFilePreviewContainerStyle:
    styleObjects.listItemFilePreviewContainerStyle,
  listItemFilePreviewStyle: styleObjects.listItemFilePreviewStyle,
  listItemFileInfoContainerStyle: styleObjects.listItemFileInfoContainerStyle,
  listItemFileInfoStyle: styleObjects.listItemFileInfoStyle,
  //
  // addStyles
  //
  addFilesListContainerStyle: {},
  addFilesListItemStyle: {},
  addListItemFilePreviewContainerStyle: {},
  addListItemFilePreviewStyle: {},
  addListItemFileInfoContainerStyle: {},
  addListItemFileInfoStyle: {},
  //
  // conditionals
  //
  showFileInfo: true,
  showFileName: true,
  showFilePath: false,
  showFilePreview: false,
  showFileSize: true,
  showFileType: false,
  showFileIconType: false,
  //
  // options
  //
  filePreviewPos: "right", // "top" "bottom" "left" "right"
  fileInfoPos: "center"
  // fileInfoPos options:
  // "topLeft"
  // "topCenter"
  // "topRight"
  // "centerLeft"
  // "center"
  // "centerRight"
  // "bottomLeft"
  // "bottomCenter"
  // "bottomRight"
  //
  // callbacks
  //
  // children
  //
};

export default FilesList;
