import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgDesktop from "../../assets/bg/BG desktop.svg";
import bgMobile from "../../assets/bg/bg mobile.svg";
import { getUserDevice } from "./services/app.service";
import { SessionProvider } from "./context/session";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../translations";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Landing = loadable(() => import("../LandingPage"));
const Projects = loadable(() => import("../ProjectsPage"));
const Project = loadable(() => import("../ProjectPage"));
const Skills = loadable(() => import("../skills/pages"));
const NotFound = loadable(() => import("../NotFoundPage/NotFoundPage"));

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mobile = getUserDevice();
    setIsMobile(mobile);
  }, []);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 1 * (60 * 1000), // 1 minute
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        <SessionProvider>
          <div className="App">
            <Header />
            <main className="main">
              <div
                className={isMobile ? "mobile" : "desktop"}
                style={isMobile ? { backgroundImage: `url(${bgMobile})` } : { backgroundImage: `url(${bgDesktop})` }}
              />
              <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/projects" element={<Projects isMobile={isMobile} />} />

                <Route path="/projects/:slug" element={<Project />} />

                <Route path="/skills" element={<Skills />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer isMobile={isMobile} />
            </main>
          </div>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
