"use client";
import React, { useState } from "react";
import Link from "next/link"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
 
const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed relative top-10 inset-x-0 max-w-2xl mx-auto z-50")}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Features">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Sharktank</HoveredLink>
            <HoveredLink href="/interface-design">Marketplace</HoveredLink>
            <HoveredLink href="/seo">IdeaZone</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/explore"}>
        <MenuItem setActive={setActive} active={active} item="Explore">
        </MenuItem>
        </Link>
      </Menu>
    </div>

  )
}

export default Navbar
