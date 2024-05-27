import React from "react";

export default function NavElement({ children }) {
  return (
    <li>
      <div className="mt-[11px]">
        <button className="nav-element">{children}</button>
      </div>
    </li>
  );
}
