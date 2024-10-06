"use client";

import { inter } from "@/app/layout";
import Link from "next/link";
import { Button } from "./ui";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    path: "/",
    label: "Pricing",
  },
  {
    id: 2,
    path: "/customers",
    label: "Customers",
  },
  {
    id: 3,
    path: "/blog",
    label: "Blog",
  },
  {
    id: 4,
    path: "/docs",
    label: "Docs",
  },
  {
    id: 5,
    path: "/extra",
    label: "Extra",
  },
];

const NavItems = () => {
  return (
    <ul className="hidden md:flex space-x-8">
      {initialItems.map((item) => (
        <li key={item.id} className=" hover:text-blue-300">
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={`${inter.className}`}>
      <div className="container mx-auto  max-w-[1104px]  rounded-xl shadow-md px-5 py-4 mt-5 ">
        <nav className="flex justify-between items-center ">
          <div className="text-2xl font-bold">Logo</div>
          <NavItems />
          <div className="flex gap-4 space-x-2 mx-5 items-center">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
            <FaBarsStaggered className="text-3xl" />
            <IoCloseSharp className="text-3xl" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
