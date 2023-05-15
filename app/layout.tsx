import "../styles/globals.css";
import { FirbaseProvider } from "@/firebase/firebaseContext";

export const metadata = {
  title: "Blog | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FirbaseProvider>{children}</FirbaseProvider>
      </body>
    </html>
  );
}
