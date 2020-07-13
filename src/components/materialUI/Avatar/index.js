import React from "react";
import Avatar from "@material-ui/core/Avatar";

import { styled } from "@material-ui/core/styles";

const Avatar = props => {
  const { alt, src } = props;
  const { avatarStyles, avatarStyles2 } = props;
  const StyledAvatar = styled(Avatar)({
    ...avatarStyles,
    ...avatarStyles2
  });
  return <StyledAvatar alt={alt} src={src} />;
};

Avatar.defaultProps = {
  alt: "...",
  src: "https://via.placeholder.com/150x150",
  //
  avatarStyles: {
    // background may not be seen, since src covers everything.
    // background: "linear-gradient(45deg, red 30%, orange 90%)",
    // boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    width: 50,
    height: 50,
    padding: "0px 0px"
  },
  avatarStyles2: {}
};

export default Avatar;
