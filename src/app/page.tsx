import Link from "next/link";
import Navbar from "./components/Navbar"
import Fundraising from "./components/Fundraising"
import Steps from "./components/Steps"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Fundraising />
      <Steps />
      <Footer />
    </main>
  );
}
