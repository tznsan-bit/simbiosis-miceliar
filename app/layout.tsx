import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simbiosismiceliar.com.ar"),
  title: "Simbiosis Miceliar | Proyecto patagónico de cannabis medicinal",
  description:
    "Proyecto patagónico de acompañamiento, formación y articulación en cannabis medicinal. Orientación, vinculación médica para REPROCANN y seguimiento cercano.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Simbiosis Miceliar",
    description:
      "Proyecto patagónico de acompañamiento, formación y articulación en cannabis medicinal.",
    url: "https://www.simbiosismiceliar.com.ar",
    siteName: "Simbiosis Miceliar",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Logo de Simbiosis Miceliar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simbiosis Miceliar",
    description:
      "Proyecto patagónico de acompañamiento, formación y articulación en cannabis medicinal.",
    images: ["/logo.png"],
  },
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
