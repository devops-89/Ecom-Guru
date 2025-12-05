
import '@/styles/globals.css';
import Footer from '@/components/Footer/Footer';
export const metadata = {
  title: 'The EcomGuru',
  description: 'E-commerce Brand Growth Partner',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
