import Link from "next/link";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
function CustomLink({children, ...props}) {
  return (
    <Link {...props} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  );
}

export default CustomLink;
