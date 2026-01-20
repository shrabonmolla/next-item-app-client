import "./globals.css";
import NavbarWrapper from "../Components/NavbarWrapper";
import Footer from "../Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
