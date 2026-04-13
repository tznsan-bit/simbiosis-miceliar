import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simbiosismiceliar.com.ar"),
  title: "Simbiosis Miceliar | Proyecto patagónico de cannabis medicinal",
  description:
    "Proyecto patagónico de acompañamiento, formación y articulación en cannabis medicinal. Orientación, vinculación médica para REPROCANN y seguimiento cercano.",
  applicationName: "Simbiosis Miceliar",
  keywords: [
    "cannabis medicinal",
    "REPROCANN",
    "Patagonia",
    "Lago Puelo",
    "acompañamiento",
    "cultivo responsable",
    "Simbiosis Miceliar",
  ],
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simbiosis Miceliar · Proyecto patagónico de cannabis medicinal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simbiosis Miceliar",
    description:
      "Proyecto patagónico de acompañamiento, formación y articulación en cannabis medicinal.",
    images: ["/og-image.png"],
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
