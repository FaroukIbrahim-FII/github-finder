import React from "react";
import { badgesList } from "./listOfBadges";

function UserBadgesList({ param, className }) {
  return <div className={className}>Public Gists: {param}</div>;
}

export default UserBadgesList;
