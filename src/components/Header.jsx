import * as React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <header className="bg-slate-600 p-2">
      <div className="container flex gap-4 items-center">
        <Menu />
        <h3 className="text-white text-2xl">VIRTUALLY CURATED</h3>
      </div>
    </header>
  );
}

export default Header;
