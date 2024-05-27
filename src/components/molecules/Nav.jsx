import React from "react";
import NavElement from "../atoms/NavElement";

const list = [
  "Network",
  "Devs",
  "Ecosystem",
  "Use Cases",
  "HBAR",
  "Governance",
  "Resources",
];
export default function Nav() {
  return (
    <nav className="nav-style">
      <ul className="flex flex-auto">
        {list.map((li) => (
          <NavElement key={li}>{li}</NavElement>
        ))}
      </ul>
    </nav>
  );
}
