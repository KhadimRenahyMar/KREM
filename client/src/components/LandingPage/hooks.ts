import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Project } from "../../interfaces/project";
import { useSession } from "../App/context/session";
import { Resource } from "../../interfaces/cloudinarySearch";


export enum ProjectQueryKeys {
  GET_ALL_PROJECTS = "GET_ALL_PROJECTS",
  GET_ONE_PROJECT = "GET_ONE_PROJECT",
  GET_ALL_GIFS = "GET_ALL_GIFS",
}

export function useProject() {
  const { store } = useSession();
  const { api } = store;

  const getProjects = (width: number) =>
    useQuery<Project[]>({
      enabled: width > 100,
      cacheTime: 0,
      queryKey: [ProjectQueryKeys.GET_ALL_PROJECTS],
      queryFn: async () => {
        const localProjects: Project[] = store.getAll("projects") as Project[];
        if (localProjects) {
          return localProjects;
        }

        const { data } = await api.project.getAll();
        if (!data || data.length === 0) {
          return [];
        }

        const newData = await api.cdn.getAll(data, width);

        if (!newData) {
          return data;
        }

        if (data && data) {
          store.set("projects", newData);
          store.setLastUpdate();
        }
        return newData;
      }
    })


  const getProject = (projectId: string, width: number) =>
    useQuery<Project | undefined>({
      enabled: width > 100,
      queryKey: [ProjectQueryKeys.GET_ONE_PROJECT, projectId],
      queryFn: async () => {
        const localProjects: Project[] = store.getOne("projectsDetail") as Project[];
        const isUpToDate = store.isUpToDate();

        if (localProjects && isUpToDate) {
          const project = localProjects.find((p) => p.name === projectId);
          if (project) {
            return project
          }
          const { data } = await api.project.getOne(projectId);
          if (!data) {
            return undefined;
          }

          const screenshots: string[] = api.cdn.create(data.screenshots, width)
          const newData = { ...data, screenshots: screenshots }

          if (data && data) {
            store.set('projectsDetail', [...localProjects, newData]);
          }
          return newData as Project;
        }

        const { data } = await api.project.getOne(projectId); const screenshots: string[] = api.cdn.create(data.screenshots, width)
        if (!data) {
          return undefined;
        }
        const newData = { ...data, screenshots: screenshots }

        if (data && data) {
          store.set('projectsDetail', [newData]);
        }
        return newData;
      }
    })

  const getGifs = (width: number) =>
    useQuery<{ name: string, url: string }[]>({
      enabled: width > 100,
      cacheTime: 0,
      queryKey: [ProjectQueryKeys.GET_ALL_GIFS],
      queryFn: async () => {
        const localGifs: { name: string, url: string }[] = store.getAll("gifs") as { name: string, url: string }[];

        if (localGifs) {
          return localGifs;
        }
        const { data } = await api.cdn.getAllGifs();

        if (!data) {
          return [];
        }
        const formattedData = await api.cdn.formatAllGIfs(data, width);

        if (data && data) {
          store.set("gifs", formattedData);
        }
        return formattedData;
      }
    })

  return {
    // Queries
    getProjects,
    getProject,
    getGifs,
    // Mutations

  }
}