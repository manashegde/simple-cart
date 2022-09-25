import React from "react";
import Navbar from "../Navbar";

export default function Layout(props) {
  return (
    <div className="container-fluid">
      <Navbar />
      {props.children}
    </div>
  );
}
