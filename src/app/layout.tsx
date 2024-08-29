import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Add this line

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowdshaki",
  description: "Reliable means to help people needing fund",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white mx-auto min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full`}>
        <AuthContextProvider>{children}</AuthContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}