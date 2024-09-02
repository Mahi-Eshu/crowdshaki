import Link from "next/link";
import Navbar from "./components/Navbar"
import FundRaising from "./components/FundRaising";
import Steps from "./components/Steps"
import FundCauses from "./components/FundCauses"
import SuccessStories from "./components/SuccessStories"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection></Herosection>
      <Steps />
      <FundRaising />
      <FundCauses />
      <SuccessStories />
      <Footer />
    </main>
  );
}
