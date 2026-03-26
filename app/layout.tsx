import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simbiosis Miceliar",
  description: "Cultivo consciente, calidad y seguridad para una comunidad responsable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
