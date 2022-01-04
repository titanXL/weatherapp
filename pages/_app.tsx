import { ForecastProvider } from "@/providers/Forecast";
import { LoadingProvider } from "@/providers/Loading";
import { ToastsProvider } from "@/providers/ToastProvider";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <ToastsProvider>
        <ForecastProvider>
          <Component {...pageProps} />
        </ForecastProvider>
      </ToastsProvider>
    </LoadingProvider>
  );
}

export default MyApp;
