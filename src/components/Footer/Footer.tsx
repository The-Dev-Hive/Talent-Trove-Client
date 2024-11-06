import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="  mx-auto   max-w-7xl px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-500 p-2 rounded-full">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h2 className="text-lg font-bold">Hirace</h2>
          </div>
          <p className="text-sm">
            Find job you love and research the fastest-growing companies.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-900">Remote Job</li>
            <li className="hover:text-gray-900">Startup</li>
            <li className="hover:text-gray-900">Investor & Board</li>
            <li className="hover:text-gray-900">Company</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Features</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-900">For Candidate</li>
            <li className="hover:text-gray-900">For Company</li>
            <li className="hover:text-gray-900">Society</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">About Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-900">Documentation</li>
            <li className="hover:text-gray-900">Contact Us</li>
            <li className="hover:text-gray-900">Career</li>
          </ul>
        </div>
      </div>

      <div className="border-t  mt-8 pt-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">©2023 Hirace Technologies, Inc.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-4">
              <span className="hover:text-gray-900">Terms</span>
              <span className="hover:text-gray-900">Privacy</span>
              <span className="hover:text-gray-900">Legal</span>
            </div>
            <span className="text-gray-500 hover:text-gray-900">
              <Facebook size={20} />
            </span>
            <span className="text-gray-500 hover:text-gray-900">
              <Linkedin size={20} />
            </span>
            <span className="text-gray-500 hover:text-gray-900">
              <Twitter size={20} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
