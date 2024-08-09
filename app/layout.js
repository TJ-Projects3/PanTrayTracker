import { Inter } from "next/font/google";
import "./globals.css";
import { getFirestore } from "firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Tracker",
  description: "App used to manage the inventory of groceries. Created by Tiwalayo Oluwalade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
