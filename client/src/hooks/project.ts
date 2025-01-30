import { useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "src/api/api";
import { useSession } from "src/business/App/context/session";
import { Project } from "src/interfaces/project";

export enum ProjectQueryKeys {
  GET_ALL_PROJECTS = "GET_ALL_PROJECTS",
  GET_ONE_PROJECT = "GET_ONE_PROJECT",
  GET_ALL_GIFS = "GET_ALL_GIFS",
}

export function useProject() {
  const { store } = useSession();
  const getProjects = (width: number) =>
    useQuery<Project[]>({
      queryKey: [ProjectQueryKeys.GET_ALL_PROJECTS],
      queryFn: async () => {
        const localProjects: Project[] = store.getAll("projects") as Project[];

        if (localProjects) {
          return localProjects;
        }
        const { data } = await Api.project.getAll();
        if (!data || data.length === 0) {
          return [];
        }

        const newData = await Api.cdn.getAll(data, width);

        if (!newData) {
          return data;
        }

        if (data && data.length > 0) {
          store.set("projects", newData);
          store.setLastUpdate();
        }
        return newData;
      },
    });

  const getProject = (projectId: string, width: number) =>
    useQuery<Project | undefined>({
      enabled: width > 0,
      queryKey: [ProjectQueryKeys.GET_ONE_PROJECT, projectId],
      queryFn: async () => {
        const localProjects: Project[] = store.getOne("projectsDetail") as Project[];
        const isUpToDate = store.isUpToDate();

        if (localProjects && isUpToDate) {
          const project = localProjects.find((p) => p.name === projectId);
          if (project) {
            return project;
          }

          const { data } = await Api.project.getOne(projectId);
          if (!data) {
            return undefined;
          }

          const screenshots: string[] = Api.cdn.create(data.screenshots, width);
          const newData = { ...data, screenshots: screenshots };

          if (newData) {
            store.set("projectsDetail", [...localProjects, newData]);
          }
          return newData as Project;
        }

        const { data } = await Api.project.getOne(projectId);
        const screenshots: string[] = Api.cdn.create(data.screenshots, width);
        if (!data) {
          return undefined;
        }
        const newData = { ...data, screenshots: screenshots };

        if (newData) {
          store.set("projectsDetail", [newData]);
        }
        return newData;
      },
    });

  const getGifs = (width: number) =>
    useQuery<{ name: string; url: string }[]>({
      enabled: width > 0,
      queryKey: [ProjectQueryKeys.GET_ALL_GIFS],
      queryFn: async () => {
        const localGifs: { name: string; url: string }[] = store.getAll("gifs") as { name: string; url: string }[];

        if (localGifs) {
          return localGifs;
        }
        const { data } = await Api.cdn.getAllGifs();

        if (!data) {
          return [];
        }
        const formattedData = await Api.cdn.formatAllGIfs(data, width);

        if (data && data.length > 0) {
          store.set("gifs", formattedData);
        }
        return formattedData;
      },
    });

  return {
    // Queries
    getProjects,
    getProject,
    getGifs,
    // Mutations
  };
}
