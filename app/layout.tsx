import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider";
import SupabaseProvider from "@/providers/SupabaseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feeds",
  description: "Feeds: Healthy food made easy for busy people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SupabaseProvider>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </SupabaseProvider>
    </html>
  );
}
