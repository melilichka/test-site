
import React from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Footer.module.css';


const Footer = (props) => {
  
  return (
      <footer className={style.footer}>
         <Navbar />
         <p>© Liliia Sharipova</p>
      </footer>
  );
}

export default Footer;