// Documentation
// https://github.com/roadmanfong/react-cropper
// https://www.npmjs.com/package/react-cropper

import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import cbCodes from "./cbCodes";

const cropper = React.createRef(null);

class CropperInput extends Component {
  // demo crop method
  _crop() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL()); // toDataURL()
    // there are better approaches that using toDataURL() specially if we use Firestore blob
  }

  cropper = createRef();

  cropImage = () => {
    const { setImage } = this.props;

    if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
      return;
    }

    this.cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob);
    }, "image/jpeg");
  };

  render() {
    // CropperInput - most relevant

    const { imagePreview } = this.props;

    const { cropInputHeight } = this.props;

    const {
      aspectRatio,
      dragMode,
      guides,
      scalable,
      rotatable,
      cropBoxMovable,
      cropBoxResizable
    } = this.props;

    // CropperInput - styles

    const { cropInputStyle } = this.props;

    // CropperInput - addStyles

    const { addCropInputStyle } = this.props;

    // CropperInput - conditionals

    // CropperInput - options

    // CropperInput - callbacks

    // CropperInput - children

    return (
      <Cropper
        // ref={cropper}
        ref={this.cropper}
        src={imagePreview}
        style={{
          ...{ height: cropInputHeight },
          ...cropInputStyle,
          ...addCropInputStyle
        }}
        // Cropper.js options
        preview=".img-preview"
        aspectRatio={aspectRatio}
        viewMode={1} // prevents the user to crop outside
        dragMode={dragMode}
        guides={guides}
        scalable={scalable}
        rotatable={rotatable}
        cropBoxMovable={cropBoxMovable}
        cropBoxResizable={cropBoxResizable}
        // crop={this._crop.bind(this)} // calls demo crop method
        crop={this.cropImage}
      />
    );
  }
}

CropperInput.defaultProps = {
  //
  // most relevant
  //
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  cropInputHeight: 200,
  aspectRatio: null,
  // aspectRatio options:
  // null for free form
  // 16 / 9 for rectangle
  // 1 for square
  dragMode: "move", // allows user move the crop around the box
  guides: false,
  scalable: true,
  rotatable: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  //
  // baseN
  //
  // styles
  //
  cropInputStyle: styleObjects.cropInputStyle,
  //
  // addStyles
  //
  addCropInputStyle: {}
  //
  // conditionals
  //
  // options
  //
  // callbacks
  //
  // children
  //
};

export default CropperInput;
