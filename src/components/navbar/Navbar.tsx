'use client';

import { FaBarsStaggered } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const initialItems = [
  {
    id: 1,
    path: '/pricing',
    label: 'Pricing',
  },
  {
    id: 2,
    path: '/customers',
    label: 'Customers',
  },
  {
    id: 3,
    path: '/blog',
    label: 'Blog',
  },
  {
    id: 4,
    path: '/docs',
    label: 'Docs',
  },
  {
    id: 5,
    path: '/extra',
    label: 'Extra',
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
    <header className="p-3 bg-[#b3cae07c] sticky top-0 z-50">
      <div className="container mx-auto  max-w-[1104px]  rounded-3xl  px-5 py-4 mt-5 shadow-custom bg-white opacity-[90%]  backdrop-filter backdrop-blur-lg">
        <nav className="flex justify-between items-center ">
          <div className="text-2xl font-bold">Logo</div>
          <NavItems />
          <div className="flex gap-4 space-x-2 mx-5 items-center">
            <button
              className="w-[60px] h-[32px] rounded-md text-[16px] text-[#111827] border
            "
            >
              Login
            </button>
            <button
              className="w-[70px] h-[34px] rounded-md text-[14px]  border bg-black text-white
            "
            >
              Register
            </button>
            <div className="md:hidden">
              {isActive ? (
                <IoCloseSharp
                  className="text-3xl"
                  onClick={() => setIsActive(!isActive)}
                />
              ) : (
                <FaBarsStaggered
                  className="text-3xl"
                  onClick={() => setIsActive(!isActive)}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
      {isActive && <MobileMenu />}
    </header>
  );
};

export default Navbar;
