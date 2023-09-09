import { AxiosInstance } from "axios";
import { Stat } from "../interfaces/stats";

export default class StatsApi {
  public constructor(private readonly client: AxiosInstance) { }

  public getAll() {
    return this.client.get<Stat>('/userInfos');
  }
}
