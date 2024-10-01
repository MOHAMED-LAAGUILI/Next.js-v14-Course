import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-lg font-bold text-white">Home</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              <span className="text-white hover:text-gray-300">About</span>
            </Link>
          </li>
          <li>
            <Link href="/blog/1">
              <span className="text-white hover:text-gray-300">Blog 1</span>
            </Link>
          </li>
          <li>
            <Link href="/about?info=1">
              <span className="text-white hover:text-gray-300">About</span>
            </Link>
          </li>
          <li>
            <Link href={{
              pathname: '/about',
              query: { info: '2' },
            }}>
              <span className="text-white hover:text-gray-300">About info 2</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;