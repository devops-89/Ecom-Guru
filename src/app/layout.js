import "./globals.css";
import Footer from "../../src/components/Footer/Footer";
import PageWrapper from "../../src/components/PageWrapper";
import HeroLayout from "../../src/components/HeroLayout";

export const metadata = {
  title: "The EcomGuru",
  description: "E-commerce Brand Growth Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <PageWrapper>
          <HeroLayout>
            {children}
          </HeroLayout>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
