import React from "react";

function UserBadgesList({ param, className }) {
  return <div className={className}>Public Gists: {param}</div>;
}

export default UserBadgesList;
