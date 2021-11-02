import Head from "next/head";
import Footer from "../components/BigComponents/Footer";
import Header from "../components/BigComponents/Header";
import MainContent from "../components/BigComponents/MainContent";
import Navbar from "../components/BigComponents/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyWalletApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full md:w-4/5 flex flex-col md:flex-row justify-between h-auto md:mx-auto mt-4">
        <Navbar />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
