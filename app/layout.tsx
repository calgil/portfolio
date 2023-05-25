import { SideBar } from "./components/Sidebar";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calvin Gilbert",
  description: "Hi, I'm Calvin, a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
