import { useQuery, useQueryClient } from "react-query";
import { useSession } from "../App/context/session";
import { Tech } from "../../interfaces/tech";
import { Project } from "../../interfaces/project";


export enum TechQueryKeys {
  GET_ALL_TECHS = "GET_ALL_TECHS",
}

export function useTech() {
  // const {t} = useTranslation()
  const { store } = useSession();
  const { api } = useSession();

  const queryClient = useQueryClient();

  const getTechs = (projects: Project[]) =>
    useQuery<Tech[]>({
      enabled: projects.length > 0,
      cacheTime: 0,
      queryKey: [TechQueryKeys.GET_ALL_TECHS],
      queryFn: async () => {
        const localTechs: Tech[] = store.getAll("techs") as Tech[];

        if (localTechs) {
          return localTechs;
        }
        const { data } = await api.tech.getAll(projects);

        if (!data) {
          return [];
        }

        store.set("techs", data);
        const date = new Date().getTime();
        store.set("lastUpdate", date.toString());
        return data;
      }
    })

  return {
    // Queries
    getTechs,

    // Mutations

  }
}