import Link from "next/link";
import Navbar from "./components/Navbar"
import Fundraising from "./components/FundRaising"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Fundraising />
    </main>
  );
}
