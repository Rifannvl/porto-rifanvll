import { ThemeProvider } from "next-themes";
import MagicCardDemo from "@/components/ui/MagicCards"; // Pastikan pathnya benar

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MagicCardDemo /> {/* Pastikan ini ada di dalam ThemeProvider */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
