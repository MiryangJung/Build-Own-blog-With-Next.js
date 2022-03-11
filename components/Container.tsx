import Head from "next/head";
import Nav from "./Nav";

const Container = (props) => {
  return (
    <>
      <Head>
        <title>내 블로그</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
