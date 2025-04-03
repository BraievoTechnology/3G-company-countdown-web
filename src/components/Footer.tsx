import React from 'react';
import { LinkedinIcon, FacebookIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="w-full py-8 text-center">
      <div className="mb-4">
        <p>Copyright © {new Date().getFullYear()} 3G Consultants</p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://lk.linkedin.com/company/3g-consultants-pvt-ltd" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors">
          <LinkedinIcon size={20} />
        </a>
        <a href="https://web.facebook.com/3gconsultantslk" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors">
          <FacebookIcon size={20} />
        </a>
      </div>
    </footer>;
};
export default Footer;