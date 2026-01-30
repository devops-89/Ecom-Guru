import "./globals.css";
import Footer from "@/components/Footer/Footer";
import PageWrapper from "@/components/PageWrapper";
import HeroLayout from "@/components/HeroLayout";

export const metadata = {
  title: "eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
  description:
    "The eComguru helps you establish, manage, and grow your online eCommerce business. With a full range of services, we are dedicated to getting results for our clients.",
  keywords: [
    "channel sales management",
    "ecommerce sales management",
    "amazon sales management",
    "inventory management",
    "inventory planning",
    "inventory control",
    "d2c brand solution",
    "ecommerce agency",
    "brand management",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "msapplication-TileImage",
        url: "/mstile-270x270.png",
      },
    ],
  },
  openGraph: {
    title: "eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
    description:
      "The eComguru helps you establish, manage, and grow your online eCommerce business. With a full range of services, we are dedicated to getting results for our clients.",
    url: "https://theecomguru.com/",
    siteName: "The eComGuru",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
    description:
      "The eComguru helps you establish, manage, and grow your online eCommerce business. With a full range of services, we are dedicated to getting results for our clients.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <PageWrapper>
          <HeroLayout>{children}</HeroLayout>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
