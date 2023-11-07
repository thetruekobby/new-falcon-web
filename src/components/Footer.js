import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto flex flex-wrap justify-between w-full py-20 pb-5">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 flex flex-col justify-center item-center">
          <img
            src="/img/brand/logoOnly.png"
            alt="logo"
            className="object-contain h-20 w-20"
          />
          <p className="font-bold">Falcon Technologies</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
          <ul className="space-y-3">
            <li className="font-bold">Services</li>
            <li>Fintech Solutions</li>
            <li>Mobile and Web Applicatio Development</li>
            <li>USSD Services</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
          <ul className="space-y-3">
            <li className="font-bold">Quick Links</li>
            <li>Fintech Solutions</li>
            <li>Mobile and Web Applicatio Development</li>
            <li>USSD Services</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-16 border-t p-4">
        2023 Falcon Technologies All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
