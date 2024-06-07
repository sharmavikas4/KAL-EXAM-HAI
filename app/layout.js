import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kal Exam Hai",
  description: "Kal Exam Hai is a platform for students to prepare for exams.",
  icons: {
    icon: "/app/favicon.ico",
  },
};
import Providers from "./redux/Providers";
import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
