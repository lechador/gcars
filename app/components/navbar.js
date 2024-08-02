'use client'
import { useState } from "react";
import Link from "next/link";

export default function NavbarServer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img src='/logo.png' alt='logo' width={120} />
        </Link>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href='/' className="hover:text-yellow-500 text-xl">
            მთავარი გვერდი
          </Link>
          <Link href='/about' className="hover:text-yellow-500 text-xl">
            ჩვენს შესახებ
          </Link>
          <Link href='/dealer' className="hover:text-yellow-500 text-xl">
            გახდი დილერი
          </Link>
          <Link href='/dashboard' className="hover:text-yellow-500 text-xl">
            კაბინეტში შესვლა
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4 px-6">
            <Link href='/' className="hover:text-yellow-500 text-xl">
              მთავარი გვერდი
            </Link>
            <Link href='/about' className="hover:text-yellow-500 text-xl">
              ჩვენს შესახებ
            </Link>
            <Link href='/dealer' className="hover:text-yellow-500 text-xl">
              გახდი დილერი
            </Link>
            <Link href='/dashboard' className="hover:text-yellow-500 text-xl">
              კაბინეტში შესვლა
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
