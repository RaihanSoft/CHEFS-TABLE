import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Recipe Calories
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Middle Section: Links (Hidden on mobile, visible on larger screens) */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/recipes" className="hover:text-gray-900">Recipes</a>
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/search" className="hover:text-gray-900">Search</a>
        </div>

        {/* Right Section: Search and Profile Icon (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l-1.5-1.5m1.5 1.5A7.5 7.5 0 1010 2.5a7.5 7.5 0 000 15zM21 21l-4.35-4.35"
              />
            </svg>
          </div>

          {/* Profile Icon */}
          <button className="bg-green-500 text-white p-2 rounded-full focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A8.966 8.966 0 0112 15c2.386 0 4.558.935 6.121 2.452M12 12a5 5 0 100-10 5 5 0 000 10zm0 2a9 9 0 00-9 9h18a9 9 0 00-9-9z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when open) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 pb-4 text-gray-600">
            <a href="/" className="hover:text-gray-900">Home</a>
            <a href="/recipes" className="hover:text-gray-900">Recipes</a>
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/search" className="hover:text-gray-900">Search</a>

            {/* Search Input */}
            <div className="relative w-full px-8">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 w-full rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-10 top-2.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l-1.5-1.5m1.5 1.5A7.5 7.5 0 1010 2.5a7.5 7.5 0 000 15zM21 21l-4.35-4.35"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
