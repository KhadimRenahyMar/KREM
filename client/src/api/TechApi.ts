import { AxiosInstance } from "axios";
import { Tech } from "../interfaces/tech";
import { Project } from "../interfaces/project";

export default class TechApi {
  public constructor(private readonly client: AxiosInstance) { }

  public getAll(projects: Project[]) {
    return this.client.post<Tech[]>(`api/techs`, projects);
  }
}
