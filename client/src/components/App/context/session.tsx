import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";

import { useLocation, useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import Api from "../../../api/api";
import { Project } from "../../../interfaces/project";
import { Tech } from "../../../interfaces/tech";
import { differenceInCalendarDays } from "date-fns";
import { Stat } from "../../../interfaces/stats";
import { Resource } from "../../../interfaces/cloudinarySearch";

interface SessionContextType {
  api: Api;
  store: {
    setLastUpdate: () => void;
    isUpToDate: () => boolean;
    getAll: (key: string) => Project[] | Tech[] | Stat | string[];
    getOne: (key: string) => Project | Project[];
    set: (key: string, value: any) => void;
  };
}

const SessionContext = createContext<SessionContextType>({} as SessionContextType);

export function SessionProvider({ children }: PropsWithChildren) {
  // const {t} = useTranslation();
  const [api, setApi] = useState<Api>({} as Api);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [storage, setStorage] = useState<Storage>();

  const initValues = () => {
    try {
      const api = new Api();
      setApi(api);
    } catch (error) {
      console.error(error);
    }
    setInitialLoading(false);
  };

  useEffect(() => initValues(), []);
  const store = useMemo(() => {
    function isUpToDate() {
      const item = localStorage.getItem("lastUpdate");
      if (!item) {
        return false;
      }

      const lastUpdate = JSON.parse(item);
      const diff = differenceInCalendarDays(lastUpdate, new Date(Date.now()));
      return diff <= 15 ? true : false;
    }

    function setLastUpdate() {
      const date = new Date().getTime();
      return localStorage.setItem("lastUpdate", date.toString());
    }

    function getAll(key: string) {
      const item = localStorage.getItem(key) || "";

      return item ? JSON.parse(item) : undefined;
    }

    function getOne(key: string) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    }

    function set(key: string, value: any) {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    }
    return { isUpToDate, setLastUpdate, getAll, getOne, set };
  }, [loading, storage, api]);

  const memoedValue = useMemo(() => {
    // function Test() {

    // }
    return {
      loading,
      api,
      store,
    };
  }, [loading, api, store]);

  return (
    <SessionContext.Provider value={{ ...memoedValue, ...store }}>
      {!initialLoading && children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
