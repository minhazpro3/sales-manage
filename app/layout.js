import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import UserSidebar from "@/components/UserSidebar";
import ContextProvider from "./contextApi/contextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div>
            <Header />
            {/* <UserSidebar /> */}
          </div>
          <div>{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
