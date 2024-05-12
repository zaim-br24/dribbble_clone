import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Dribbble",
  description: "Dribbble clone using nextjs 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
      <Footer />
    </html>
  );
}
