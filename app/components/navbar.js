'use client'
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const menuItems = [{
    name: "მთავარი", 
    link: "/"
  }, 
  {
    name: "ჩვენს შესახებ", 
    link: "/"
  },
  {
    name: "გახდი დილერი", 
    link: "/"
  }, 
  {
    name: "კაბინეტში შესვლა", 
    link: "/"
  }]


const MobileMenu = ({ isOpen, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg p-4" onClick={handleMenuClick}>
            <ul className="flex flex-col space-y-2">
                {menuItems.map((item, index) => { 
                    return(
                        <li key={index}>
                            <Link href={item.link} className="hover:text-yellow-500 text-black">
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img src='/logo.png' alt='logo' width={120} />
        </Link>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => { 
                return <Link key={index} href={item.link} className="hover:text-yellow-500 text-xl">{item.name}</Link>
            })}
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <button className="focus:outline-none" onClick={toggleMenu}>
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
