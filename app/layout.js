import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nevermore",
  description: "Generated by the order of Nevermore",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_aW5mb3JtZWQtaWd1YW5hLTIyLmNsZXJrLmFjY291bnRzLmRldiQ"
      }
      afterSignInUrl="/task"
      afterSignUpUrl="/task"
      appearance={{
        baseTheme: [dark],
        variables: { colorPrimary: "white" },
      }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
