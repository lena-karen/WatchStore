import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className='sm:flex gap-3 md:gap-8 text-lg hidden'>
      <Link href="/" className='hover:text-sky-500'>Products</Link>
      <Link href="/" className='hover:text-sky-500'>Contacts</Link>
      <Link href="/" className='hover:text-sky-500'>About</Link>
    </nav>
  );
};
