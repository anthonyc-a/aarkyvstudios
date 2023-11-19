import Nav from "./components/nav";
import "./css/globals.scss";
import "./css/webfonts/britti-sans-variable.css";
import type { Metadata } from "next";
import MarqueeCpt from "./components/marquee";
import Cookies from "./components/cookies";
import Systems from "./components/systems";
import Cursor from "./components/cursor";
import Scrollbar from "./components/scrollbar";
import ThemeToggle from "./components/theme";
import Logo from "./components/logo";
import Archive from "./components/archive";
import { VisibilityProvider } from "./context/Visibility";
import Particles from "./components/particles";
import ContactButton from "./components/contact";
import Header from "./components/header";

const images: any = [
  {
    src: "/img1.png",
    alt: "Image 1",
    caption: "This is the first image",
  },
  {
    src: "/img1.png",
    alt: "Image 2",
    caption: "This is the second image",
  },
  {
    src: "/img1.png",
    alt: "Image 3",
    caption: "This is the third image",
  },
  {
    src: "/img1.png",
    alt: "Image 1",
    caption: "This is the first image",
  },
  {
    src: "/img1.png",
    alt: "Image 2",
    caption: "This is the second image",
  },
  {
    src: "/img1.png",
    alt: "Image 3",
    caption: "This is the third image",
  },
  {
    src: "/img1.png",
    alt: "Image 1",
    caption: "This is the first image",
  },
  {
    src: "/img1.png",
    alt: "Image 2",
    caption: "This is the second image",
  },
  {
    src: "/img1.png",
    alt: "Image 3",
    caption: "This is the third image",
  },
];

export const metadata: Metadata = {
  title: "Aarkyv Studios — Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VisibilityProvider>
      <html lang="en">
        <head>
          <meta name="theme-color" content="#fafafa" />
        </head>
        <body>
          <div className="overlay"></div>
          <Cursor />
         <Header/>
          <main>{children}</main>
          <Cookies/>
          <Archive images={images} />
        </body>
      </html>
    </VisibilityProvider>
  );
}
