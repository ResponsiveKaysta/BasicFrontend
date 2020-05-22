import { Link } from "@reach/router";
import * as React from "react";
import { FC, useState } from "react";

export const Menu: FC = () => {
  const [isRight, setIsRight] = useState<boolean>(false);

  const showRight = () => {
    setIsRight(isRight ? false : true);
  };

  return (
    <>
      <span
        onClick={showRight}
        className={isRight ? "menuClose" : "menuToggle"}
      >
        <span className={!isRight ? "" : "displayNone"}>menu</span>
      </span>

      <div className={isRight ? "menu displayBlock" : "displayNone"} id="menu">
        <ul onClick={showRight}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
