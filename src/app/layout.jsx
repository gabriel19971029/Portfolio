import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import CustomCursor from "@/components/customCursor";
import BackgroundMusic from "@/components/backgroundMusic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Clemente Portfolio App",
  description: "The best animated portfolio page",
};

/**
 * RootLayout Component
 * The root layout for the application, including global styles, custom cursor, and transition provider.
 *
 * @param {Object} children - The child components to be rendered within the layout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <TransitionProvider>{children}</TransitionProvider>
        <BackgroundMusic />
      </body>
    </html>
  );
}