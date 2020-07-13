// @flow

/**
 * [FEATURES]
 *
 * This component should work even if no props are passed, it will use default props.
 * It is totatly customizable.
 *
 * This component can render child components (optional)
 *
 * A component might have phases, the higher the phase, the more features it may have
 *
 * [UPCOMING FEATURES]
 *
 * Random video background, pass an array of videos as a prop. Component will
 * play a random video every time it is called.
 *
 * Component will render a logo, title, text, 4 buttons with links, navbar?
 *
 * [SOURCES]
 *
 * Read the next article to learn more about 4 ways to style react components.
 * https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
 *
 * More info about background video
 * https://slicejack.com/fullscreen-html5-video-background-css/
 * https://www.webdesignerdepot.com/2013/10/how-to-play-video-with-html5/
 *
 * Free Video Backgrounds for Websites
 * https://coverr.co
 *
 * Paid Top Quality Video Backgrounds for Websites
 * https://www.shutterstock.com/video
 *
 * Free mp4 video converter
 * Free mp4 to webm video converter
 */

import React, { Component } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import defaultMp4VideoSrc from "./assets/Modem-lights.mp4";
import defaultWebmVideoSrc from "./assets/Modem-lights.webm";
import defaultBgImgSrc from "./assets/Modem-lights.jpg";

const MyBackgroundVideo = props => {
  const {
    coverColor,
    coverOpacity,
    bgImgSrc,
    mp4VideoSrc,
    webmVideoSrc,
    customStyle,
    children,
    childrenOpacity
  } = props;

  const styles = {
    backgroundColor: coverColor,
    opacity: coverOpacity
  };

  const childDivStyle = {
    // backgroundColor: "black",
    opacity: childrenOpacity,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  return (
    <div className="background-video-div-relative">
      <div className="background-video-container">
        <img
          className="background-video-component-items background-video-element"
          src={bgImgSrc}
        />
        <video
          className="background-video-component-items background-video-element"
          // controls
          // width="100%"
          // height="100%"
          // preload="true"
          autoPlay
          loop
          muted
          playsInline={true}
          disablePictureInPicture={true}
          // poster={bgImgSrc}
        >
          {/* type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' */}
          {/* type='video/webm;codecs="vp8, vorbis"' */}
          <source src={mp4VideoSrc} type="video/mp4" />
          <source src={webmVideoSrc} type="video/webm" />
          {/*Your browser does not support the video tag.*/}
        </video>
        <div
          className="background-video-component-items background-video-color-cover"
          style={styles}
        />
        <div style={childDivStyle}>{children}</div>
      </div>
    </div>
  );
};

MyBackgroundVideo.defaultProps = {
  coverColor: "black",
  coverOpacity: 1,
  bgImgSrc: defaultBgImgSrc,
  mp4VideoSrc: defaultMp4VideoSrc,
  webmVideoSrc: defaultWebmVideoSrc,
  childrenOpacity: 1,
  customStyle: {}
};

export default MyBackgroundVideo;
