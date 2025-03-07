import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("click");
    // setIsOpen(false);
  };

  return (
    <Button onClick={handleClick}>
      <MenuIcon />
    </Button>
  );
}

export default Nav;
