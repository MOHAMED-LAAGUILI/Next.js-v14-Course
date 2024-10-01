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
        <CustomLink href="/product/samsung">
         
            Samsung
       
        </CustomLink>
        <CustomLink href="/product/nokia" legacyBehavior passHref>
          Nokia
        </CustomLink>
        <CustomLink href="/product/intel" legacyBehavior passHref>
         Intel
        </CustomLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Menubar;
