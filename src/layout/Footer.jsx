import React from 'react';


const Footer = () => {
  return (
    <>
      <footer className="footer py-3 text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} <span className="fw-bold">Event Manager</span> | Developed by <span className="text-gradient fw-bold">Nirav</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
