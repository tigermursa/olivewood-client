import React from "react";

const Footer = () => {
  return (
    <div className="bg-black  pt-40 pb-32">
      <footer className="footer p-10 font-semibold mx-auto text-white pc-width">
        <div>
          <span className="footer-title text-yellow-300 ">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Our Sitemap</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Returns</a>
        </div>
        <div>
          <span className="footer-title text-yellow-300">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Bangladesh </a>
          <a className="link link-hover">Pakistan</a>
          <a className="link link-hover">USA</a>
        </div>
        <div>
          <span className="footer-title text-yellow-300">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">User orders </a>
          <a className="link link-hover">All time top </a>
          <a className="link link-hover">Tests policy</a>
          <a className="link link-hover">Terms of Interns</a>
          <a className="link link-hover">Return policy</a>
          <a className="link link-hover">Sell policy</a>
        </div>
        <div>
          <span className="footer-title text-yellow-300">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white">
              Phone: <a href="tel:+1234567890">+123 456 7890</a>
            </p>
            <p className="text-white">
              Email:{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p className="text-white">Address: 123 Street, City, Country</p>
          </div>
          <div className="mt-4">
            <p className="text-white">
              Phone: <a href="tel:+1234567890">+123 456 7891</a>
            </p>
            <p className="text-white">
              Email:{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p className="text-white">Address: 231 Street, City, Country</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
