import '@/app/ui/global.css';
import { inter, lusitania } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        {/* <p className={lusitania.className}></p> */}
      </body>
    </html>
  );
}
