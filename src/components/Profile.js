import * as React from "react";
import { Avatar } from "@fluentui/react-components";

function Profile() {
  return (
    <Avatar
      initials="128"
      align="center"
      name="Katri Athokas"
      image={{
        src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
      }}
      size={128}
    />
  );
}

export default Profile;
