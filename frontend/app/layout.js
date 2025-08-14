import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Book Catalogue',
  description: 'Manage your personal library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg justify-between min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 text-gray-800">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
