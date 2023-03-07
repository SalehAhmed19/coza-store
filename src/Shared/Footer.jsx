import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-40 bg-[#222222] text-base-content">
      <div>
        <span className="footer-title text-[#fff]">Services</span>
        <a className="link link-hover text-[#B2B2B2]">Branding</a>
        <a className="link link-hover text-[#B2B2B2]">Design</a>
        <a className="link link-hover text-[#B2B2B2]">Marketing</a>
        <a className="link link-hover text-[#B2B2B2]">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-[#fff]">Company</span>
        <a className="link link-hover text-[#B2B2B2]">About us</a>
        <a className="link link-hover text-[#B2B2B2]">Contact</a>
        <a className="link link-hover text-[#B2B2B2]">Jobs</a>
        <a className="link link-hover text-[#B2B2B2]">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-[#fff]">Legal</span>
        <a className="link link-hover text-[#B2B2B2]">Terms of use</a>
        <a className="link link-hover text-[#B2B2B2]">Privacy policy</a>
        <a className="link link-hover text-[#B2B2B2]">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title text-[#fff]">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-[#B2B2B2]">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
