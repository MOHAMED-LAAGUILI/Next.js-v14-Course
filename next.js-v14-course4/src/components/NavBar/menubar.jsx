import React from "react";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CustomLink from "./customLink.jsx";

function Menubar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <CustomLink href="/dashboard/profile">Dashboard Profile</CustomLink>
          <CustomLink href="/dashboard/settings" legacyBehavior passHref>
            Dashboard settings
          </CustomLink>
          <CustomLink href="/dashboard/edit" legacyBehavior passHref>
            Dashboard Edit
          </CustomLink>
          <CustomLink href="/profile" legacyBehavior passHref>
            Profile
          </CustomLink>
          <CustomLink href="/settings" legacyBehavior passHref>
            Settings
          </CustomLink>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Menubar;
