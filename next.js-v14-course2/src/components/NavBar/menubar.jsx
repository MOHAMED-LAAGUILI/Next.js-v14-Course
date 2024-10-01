import React from "react";

import CustomLink from "./customLink";

import {
  NavigationMenu,

  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Menubar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <CustomLink href="/login">
         
            Login
       
        </CustomLink>
        <CustomLink href="/logout" legacyBehavior passHref>
          Logout
        </CustomLink>
        <CustomLink href="/register" legacyBehavior passHref>
         Register
        </CustomLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Menubar;
