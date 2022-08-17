import type { NextPage } from "next";
import Head from "next/head";
import Main from "../src/components/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      
        <title>Frontend Mentor | Interactive rating component</title>
        <meta
          name="description"
          content="Frontend Mentor | Interactive rating component by Neljohn Cerera"
        />
      </Head>
      <main className="h-screen w-screen flex justify-center items-center px-5 bg-primary">
        <Main />
      </main>
    </>
  );
};

export default Home;
