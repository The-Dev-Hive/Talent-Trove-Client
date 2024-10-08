import { Twitter, Send } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <span className="text-blue-500">✈️</span>
          <span>talentTrove.com | All rights reserved</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-blue-500 font-medium">Follow us</span>
            <Twitter className="text-blue-500 w-6 h-6 cursor-pointer hover:text-blue-400 transition duration-200" />

            <Send className="text-blue-500 w-6 h-6 cursor-pointer hover:text-blue-400 transition duration-200" />
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 text-gray-500 text-sm">
            <a href="#" className="hover:underline hover:text-blue-500">
              Terms
            </a>
            <a href="#" className="hover:underline hover:text-blue-500">
              Privacy
            </a>
            <a href="#" className="hover:underline hover:text-blue-500">
              Guidelines
            </a>
            <a href="#" className="hover:underline hover:text-blue-500">
              Why Choose Us?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
