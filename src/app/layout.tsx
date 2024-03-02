import { Grandstander } from 'next/font/google';
import '../styles/globals.css';

const font = Grandstander({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className + ' text-primary'}>
        <main>{children}</main>
      </body>
    </html>
  );
}
