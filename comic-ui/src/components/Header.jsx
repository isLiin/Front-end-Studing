import React from "react";
import { BrowserRouter as Link, BrowserRouter } from "react-router-dom";

function myHeader(params) {
  return (
    <BrowserRouter>
        <div className="header_left">
          <Link to="/"></Link>
          <Link to="/">Liblary</Link>
          <Link to="/">Like</Link>
          <Link to="/">HOT Search</Link>
          <Link to="/">Bookmark</Link>
        </div>
    </BrowserRouter>
  );
}

export default myHeader;
