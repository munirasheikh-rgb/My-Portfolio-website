import "./globals.css";
import "../styles/animations.css";

export const metadata = {
  title: "Munira Hassan | Portfolio",
  description: "Munira Hassan's developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
