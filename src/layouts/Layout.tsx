import React from "react";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      <main className="pt-4">{children}</main>
    </div>
  );
};

export default Layout;
