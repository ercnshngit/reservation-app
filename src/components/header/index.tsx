import { MENU } from "@/constants/menu";
import Link from "next/link";
import React from "react";
import MenuItem from "../ui/menu-item";

export default function Header() {
  return (
    <nav className="bg-slate-800">
      <ul className="container flex justify-center gap-2 py-2 ">
        {MENU.map((item, index) => (
          <MenuItem
            key={index}
            url={"/dashboard/" + item.url}
            title={item.title}
          />
        ))}
      </ul>
    </nav>
  );
}
