import { ILayout } from "../../models/index";
// import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ title, description, keywords, children }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
      </Head>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  title: "Mosbat Sabz | مثبت سبز",
  description: "داروخانه",
  keywords: "دارو , مثبت سبز",
};

export default Layout;
