import * as React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="flex flex-col justify-center items-center mb-5 bg-listcolor">
        <ul className="container inline-flex place-content-around bg-textcolor1">
          <li className="text-pagebg">
            <Nav />
          </li>
          <li className="text-pagebg">
            <img src="src/imgs/logo.jpg" className="h-12 p-1" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
