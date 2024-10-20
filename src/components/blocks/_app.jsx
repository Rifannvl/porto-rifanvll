// pages/_app.js
import { ThemeProvider } from "next-themes";
import "@/app/globals.css"; // Pastikan untuk menyesuaikan path ke file CSS global kamu

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
