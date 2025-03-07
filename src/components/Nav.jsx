import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <Button
        id="menu-button"
        aria-controls={open ? "menu-list" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2d3754"
          className="size-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <Menu
        id="menu-list"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>
          <a href="/" className="text-bgcolor">
            Home
          </a>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <a href="/search" className="text-bgcolor">
            Search All Collections
          </a>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <a href="/collections" className="text-bgcolor">
            View All Collections
          </a>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <a href="/mycollection/:user_id" className="text-bgcolor">
            View My Collections
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Nav;
