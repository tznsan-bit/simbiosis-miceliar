import "./globals.css";

export const metadata = {
  title: "Simbiosis Miceliar",
  description: "Comunidad, bienestar y acompañamiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
