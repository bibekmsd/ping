import React from "react";
import { Link } from "react-router-dom";
import Button from "../Reuseable/Buttons";

const Page_Not_found = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-center text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary"> Go Back Home </Button>
      </Link>
    </div>
  );
};

export default Page_Not_found;
