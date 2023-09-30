import React from 'react';
import {FaYoutube, FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pt-6 bg-primary'>
      <div className='container mx-auto'> 
        <div className='text-center' >
          <h2 className='h2 uppercase mc-6 font-semibold'>Subscribe to our newsletters</h2>
           <p className='text-white/70'>Be the first to get the latest news about trends'
              promotions and much more!
           </p>
        </div>
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row
        gap-5 my-14'>
          <input
           tykpe='text'
           placeholder='Your email address'
           className='input' 
          />
          <button className='btn btn-accent min-w-[150px]'>Join</button>
        </form>

        <div className='text-base text-white/60 flex gap-x-6 capitalize
        max-w-max mx-auto mb-9'>
          <a href='#' className='hover:text-white transition-all'>
            Return policy
          </a>
          <a href='#' className='hover:text-white transition-all'>
            Track your order
          </a>
          <a href='#' className='hover:text-white transition-all'>
          shipping & delivery
          </a>
        </div>

        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <a href='#' className='hover:text-white transition-all'>
            <FaYoutube />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaFacebook />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaInstagram />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaTwitter />
          </a>
        </div>

      </div>
      <div className='py-10 border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-centre text-sm text-white/60'>
            Copyright & copy: Focus. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
