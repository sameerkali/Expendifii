import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Expendifii",
  description: "We convert dream into code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
