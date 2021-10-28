import Head from "next/head";
import Footer from "../components/BigComponents/Footer";
import Header from "../components/BigComponents/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyWalletApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-4/5 h-96 mx-auto mt-4 border"></main>
      <Footer />
    </div>
  );
}
