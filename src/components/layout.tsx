import { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-auto font-roboto flex flex-col">
      <Navbar />
      <div
        className="container mx-auto grow py-4 px-8 flex flex-col"
        data-testid="content-container"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
