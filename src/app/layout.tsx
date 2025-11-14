import { Inter, Poppins } from "next/font/google";
import "../app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
