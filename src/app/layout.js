import "./globals.css";
import {Nunito_Sans} from "next/font/google"

const nunitoSans = Nunito_Sans({
  subsets:["latin"],
  weight:["300","600","800"]
})

export const metadata = {
  title: "Frontend Mentor | REST Countries API with color theme switcher",
  description: "REST Countries API with color theme switcher Challenge Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
