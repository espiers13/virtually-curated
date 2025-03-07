import * as React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex bg-homepage p-5 w-84 h-50">
      <div className="mt-2">
        <Nav />
      </div>
      <div className="bg-homepage w-2/3" />
      <h1 className="text-textcolor1 mt-2 mb-2 bg-pagebg p-2 w-1/3">
        VIRTUALLY CURATED
      </h1>
    </header>
  );
}

export default Header;
