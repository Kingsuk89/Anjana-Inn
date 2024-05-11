import type { Metadata } from 'next';
import '@/styles/globals.css';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Navbar from '@/components/layout/nav/Navbar';
import Feedbackmodal from '@/components/feedback/Feedbackmodal';
import Footer from '@/components/layout/Footer';
import QueryProvider from '@/components/provider/QueryProvider';
import ToastProvider from '@/components/provider/ToastProvider';
import NextSessionProvider from '@/components/provider/SessionProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSessionProvider>
            <QueryProvider>
              <ToastProvider />
              <Navbar />
              <main className="flex-grow">{children}</main> <Feedbackmodal />
              <Footer />
            </QueryProvider>
          </NextSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
