import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen flex flex-col justify-center items-center">
      <p className="text-white text-5xl mb-12 font-bold">Page Not Found</p>
      <img
        className="w-64 h-auto mb-8 rounded-full"
        src="/43391-404-error-page-not-found-confused-robot.gif"
        alt="404 GIF"
      />
      <p className="text-white text-2xl text-center">
        Oops! The page you're looking for does not exist.
      </p>
      <p className="text-white text-xl mt-4">
        It seems the developer is still working on this route.
      </p>
      <Link to="/">
        <button className="btn btn-outline btn-primary mt-10">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
