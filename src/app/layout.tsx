import type { Metadata } from "next";
import "../app/styles/globals.css";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Dashboard - Migração",
  description: "Dashboard para monitoramento de migração de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <div>
          <main>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
