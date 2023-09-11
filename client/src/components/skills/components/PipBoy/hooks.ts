import { useQuery } from "@tanstack/react-query";
import { Stat } from "../../../../interfaces/stats";
import { useSession } from "../../../App/context/session";

export enum StatsQueryKeys {
  GET_ALL_STATS = "GET_ALL_STATS",
}

export function useStats() {
  // const {t} = useTranslation()
  const { store } = useSession();
  const { api } = useSession();

  // const queryClient = useQueryClient();

  const getStats = () =>
    useQuery<Stat | undefined>({
      cacheTime: 0,
      queryKey: [StatsQueryKeys.GET_ALL_STATS],
      queryFn: async () => {
        const localStats: Stat = store.getAll("stats") as Stat;

        if (localStats) {
          return localStats;
        }

        const { data } = await api.stats.getAll();

        if (!data) {
          return undefined;
        }

        store.set("stats", data);
        return data;
      }
    })

  return {
    // Queries
    getStats,
    // Mutations

  }
}