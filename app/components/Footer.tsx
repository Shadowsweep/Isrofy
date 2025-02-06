import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4"> Made By Utkarsh Gupta</h2>
          <p className="text-gray-400">Delivering excellence in technology solutions.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="https://updated-portfolio-1-rose.vercel.app/" className="text-gray-400 hover:text-white transition duration-300">About Me</a></li>

          </ul>
        </div>

      
      </div>
      
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Shadowsweep All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
