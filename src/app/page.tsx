import Link from "next/link";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel"
import TrendingFunds from "./components/TrendingFunds"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <TrendingFunds />
    </main>
  );
}
