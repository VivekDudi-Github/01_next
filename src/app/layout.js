import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-slate-500 font-semibold text-white p-4 text-center">
          <h1><Navigation/></h1> 
        </header>
        {children}
        <footer className="bg-slate-500 font-semibold text-white p-4 pb-0 text-center">
          Cartoon Network
        </footer>
      </body>
    </html>
  );
}
