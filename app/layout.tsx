import { ThemeProvider } from "@/components/theme-provider";
import { FirbaseProvider } from "@/firebase/firebaseContext";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cm } from "@/lib/utils";

import "../styles/globals.css";

export const metadata = {
  title: "Blog | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cm("min-h-screen bg-coal font-light")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirbaseProvider>{children}</FirbaseProvider>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
