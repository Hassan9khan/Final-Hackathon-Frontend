import React from 'react';

const Footer = () => {
  return (
     <footer className="footer bg-[#c81b3e] text-[#ece6e6] p-10">
     <div>
     <div className=" items-center gap-2">
        <div className="text-3xl">SMIT </div>
        <div className="text-xl mt-4">
          <h1>Saylani  MicroFinance App</h1>
          <h1></h1>
        </div>
      </div>
     </div>
     <div>
        <h6 className="footer-title">Services</h6>
        <a href='/' className="link link-hover">Home</a>
        <a href='/about' className="link link-hover">About</a>
        <a href='/loandetail' className="link link-hover">Loans</a>
        <a href='/register' className="link link-hover">Register</a>
        <a href='/login' className="link link-hover">Login</a>
      </div>
     <nav>
       <h6 className="footer-title">Not Available</h6>
       <a className="link link-hover">Not Available</a>
       <a className="link link-hover">Contact</a>
       <a className="link link-hover">Jobs</a>
       <a className="link link-hover">Press kit</a>
     </nav>
     <nav>
       <h6 className="footer-title">Legal</h6>
       <a className="link link-hover">Terms of use</a>
       <a className="link link-hover">Privacy policy</a>
       <a className="link link-hover">Cookie policy</a>
     </nav>
   </footer>
  );
};

export default Footer;
