import { Routes } from "./types";
import { Suspense, lazy } from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Loader } from "src/ui/loader";

// pages
const LandingPage = lazy(() =>
  import("../business/landing/pages/landing").then(({ LandingPage }) => ({
    default: LandingPage,
  }))
);

const ProjectsPage = lazy(() =>
  import("../business/projects/pages/projects").then(({ ProjectsPage }) => ({
    default: ProjectsPage,
  }))
);
const ProjectPage = lazy(() =>
  import("../business/project/pages/project").then(({ ProjectPage }) => ({
    default: ProjectPage,
  }))
);
const SkillsPage = lazy(() =>
  import("../business/skills/pages/skills").then(({ SkillsPage }) => ({
    default: SkillsPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("../business/notFound/pages/notFound").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);

export function Router() {
  return (
      <Suspense fallback={<Loader />}>
        <RouterRoutes>
          <Route path={Routes.Landing} element={<LandingPage />} />
          <Route path={Routes.Projects} element={<ProjectsPage />} />
          <Route path={Routes.Project} element={<ProjectPage />} />
          <Route path={Routes.Skills} element={<SkillsPage />} />
          <Route path={Routes.NotFound} element={<NotFoundPage />} />
        </RouterRoutes>
      </Suspense>
  );
}
