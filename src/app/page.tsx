import Link from "next/link";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <h1
        className="my-8 font-bold text-3xl md:text-4xl my-14 
            capitalize text-center
            drop-shadow-lg py-2 px-4
            rounded-lg
            relative"
      >
        welcome home nigga
      </h1>
    </main>
  );
}
