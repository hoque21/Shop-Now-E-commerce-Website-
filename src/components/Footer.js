import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        {/* Left section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Company Name</h3>
          <p className="text-sm">123 Main Street, City, Country</p>
          <p className="text-sm">Phone: +123-456-7890</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>

        {/* Middle section */}
        <nav className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>

        {/* Right section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
