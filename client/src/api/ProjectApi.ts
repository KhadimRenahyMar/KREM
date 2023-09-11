import { AxiosInstance } from "axios";
import { Project } from "../interfaces/project";

export default class ProjectApi {
  public constructor(private readonly client: AxiosInstance) { }

  public getAll() {
    return this.client.get<Project[]>(`api/projects/all`);
  }

  public getOne(projectId: string) {
    return this.client.get<Project>(`api/projects/${projectId}`);
  }
}
