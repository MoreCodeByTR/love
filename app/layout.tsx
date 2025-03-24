import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '我们的爱情空间',
  description: '记录我们的点点滴滴',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}