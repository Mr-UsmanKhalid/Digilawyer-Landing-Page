import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
 

    <footer className="bg-gray-900 text-white py-15">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">DigiLawyer</h3>
          <p className="text-sm text-gray-300">
            DigiLawyer is an AI-based legal co-pilot for lawyers that helps them in legal research, drafting, and document management & analysis.
          </p>
        </div>
    
        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
    
        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <div className="flex space-x-4">
            <a href="" ><FacebookIcon /></a>
            <a href="" ><InstagramIcon /></a>
            <a href="" ><LinkedInIcon /></a>
          </div>
        </div>
    
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>+92 304 4814770</li>
            <li><a href="mailto:contact@digi-lawyer.com" className="text-blue-400 hover:underline">contact@digi-lawyer.com</a></li>
          </ul>
        </div>
      </div>
    
      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2025 DigiLawyer. All rights reserved.
      </div>
    </footer>
    
  )
}

export default Footer