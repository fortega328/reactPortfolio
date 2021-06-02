import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Footer() {
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="font-dosis fixed bottom-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-3">
        <ScrollLink
          to="footer"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-blue-400 inline-block ml-2  rounded-full"></span>
          </h1>
        </ScrollLink>
        
        <a href= "/assets/frankresume2021.pdf" className="text-white text-xl">
        View Resumé  
        </a>
      </div>
    </div>
  );
}
