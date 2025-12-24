import "./globals.css";
import Footer from "@/components/Footer/Footer";
import PageWrapper from "@/components/PageWrapper";
import HeroLayout from "@/components/HeroLayout";

export const metadata = {
  title: "The EcomGuru",
  description: "E-commerce Brand Growth Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
