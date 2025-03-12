import '@/app/ui/global.css'; // Added import global styles
import { inter } from '@/app/ui/fonts'; // Added import fonts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
