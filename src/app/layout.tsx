import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - Next.js",
    template: "%s | The Blog",
  },
  description: "Descrição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
