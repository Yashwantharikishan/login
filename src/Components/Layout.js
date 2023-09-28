import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ user, setUser, children }) => {
  return (
    <div className="yash ">
      <Header user={user} setUser={setUser} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
