'use client'
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down the page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 focus:outline-none">
          <FaArrowCircleUp size={32} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
