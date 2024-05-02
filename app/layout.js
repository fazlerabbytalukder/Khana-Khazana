import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "A food recipe details finder app",
  openGraph: {
    title: 'Khana Khazana',
    description: 'A food recipe details finder app',
    images: [
      {
        url: 'https://khana-khazana-three-rosy.vercel.app/api/og', // Must be an absolute URL
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
