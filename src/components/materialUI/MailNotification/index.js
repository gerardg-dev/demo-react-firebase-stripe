import React from "react";

import NotificationItem from "./NotificationItem";
import { notifications } from "./data";
import CustomScrollbars from "util/CustomScrollbars";

const MailNotification = props => {
  const {
    customScrollbarsClassName,
    customScrollbarsClassNameAdd,
    customScrollbarsStyle,
    customScrollbarsStyleAdd,
    ulClassName,
    ulClassNameAdd
  } = props;
  return (
    <CustomScrollbars
      className={`${customScrollbarsClassName} ${customScrollbarsClassNameAdd}`}
      style={{ ...customScrollbarsStyle, ...customScrollbarsStyleAdd }}
    >
      <ul className={`${ulClassName} ${ulClassNameAdd}`}>
        {notifications.map((notification, index) => (
          <NotificationItem key={index} notification={notification} />
        ))}
      </ul>
    </CustomScrollbars>
  );
};

MailNotification.defaultProps = {
  customScrollbarsClassName: "messages-list scrollbar",
  customScrollbarsClassNameAdd: "",
  customScrollbarsStyle: { height: 280 },
  customScrollbarsStyleAdd: {},
  ulClassName: "list-unstyled",
  ulClassNameAdd: ""
};

export default MailNotification;
