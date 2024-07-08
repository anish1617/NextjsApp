<<<<<<< HEAD
import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

=======
>>>>>>> c2b4a07 (initial setup)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body>{children}</body>
>>>>>>> c2b4a07 (initial setup)
    </html>
  );
}
