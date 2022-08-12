import Head from "next/head";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";

import styles from "./_layout.module.sass";

export const Layout = ({ children }) => {
  return (
    <div className={styles["page-wrapper"]}>
      <Head>
        <title>Next Storefront</title>
        <meta name="description" content="words" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
