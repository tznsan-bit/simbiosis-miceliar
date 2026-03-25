import "./globals.css";

export const metadata = {
  title: "Simbiosis Miceliar",
  description: "Seguridad para tu salud",
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
