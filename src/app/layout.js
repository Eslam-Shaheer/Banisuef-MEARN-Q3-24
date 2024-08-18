import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banisuef NextJs Title",
  description: "Banisuef NextJs Title description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <Header />

          <div className="flex-1">{children}</div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
