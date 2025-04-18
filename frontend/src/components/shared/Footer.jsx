import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Job Hunt</h2>
          <p className="text-sm text-gray-600">Your trusted partner in job search & career growth.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-3">Stay updated with job alerts.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-700">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-500">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-800">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 Job Hunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
