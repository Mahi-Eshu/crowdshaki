import Link from "next/link";
import Navbar from "./components/Navbar"
import Fundraising from "./components/Fundraising"
import Steps from "./components/Steps"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection></Herosection>
      <Fundraising />
      <Steps />
      <Footer />
    </main>
  );
}
