import "./App.scss";
import "../../styles/output.css";

// import Header from "../header/Header";
import Footer from "../footer/Footer";
// import bgDesktop from "../../assets/bg/BG desktop.svg";
// import bgMobile from "../../assets/bg/bg mobile.svg";
import { getUserDevice } from "./services/app.service";
import { fr } from "date-fns/locale";
import createCache from "@emotion/cache";
import { SessionProvider } from "./context/session";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../translations";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "src/router";
import { Loader } from "src/ui/loader";
import { ChakraProvider } from "@chakra-ui/provider";
import { setDefaultOptions } from "date-fns";
import { extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { brandColors } from "src/styles/brand-colors";
import clsx from "clsx";

function App() {
  const isMobile = getUserDevice();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 1 * (60 * 1000), // 1 minute
      },
    },
  });

  setDefaultOptions({ locale: fr });

  const emotionCache = createCache({
    key: "emotion-css-cache",
    prepend: true, // ensures styles are prepended to the <head>, instead of appended
  });

  const theme = extendTheme({
    colors: brandColors,
  });
  console.log("isMobile", isMobile);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        <SessionProvider>
          <ChakraProvider theme={theme}>
            <CacheProvider value={emotionCache}>
              <div className="">
                {/* <Header /> */}
                <main
                  className={clsx(
                    "bg-secondary-main h-[100%]",
                    {
                      "bg-cloud-desktop": !isMobile,
                    },
                    { "bg-cloud-mobile": isMobile },
                  )}
                >
                  <Router />
                  <Footer />
                </main>
              </div>
            </CacheProvider>
          </ChakraProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
