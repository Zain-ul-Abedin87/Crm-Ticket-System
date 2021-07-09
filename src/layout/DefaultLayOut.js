import React from "react";
import Footer from "./Partials/Footer";
import Header from "./Partials/Header";
import "../App.css"
const DefaultLayOut = ({children}) => {
  return (
    <div className="default-layout">
      <div className="header">
        <Header />
      </div>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayOut;
