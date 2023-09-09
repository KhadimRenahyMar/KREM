import { AxiosInstance } from "axios";
import { Project } from "../interfaces/project";

export default class ProjectApi {
  public constructor(private readonly client: AxiosInstance) { }

  public getAll() {
    return this.client.get<Project[]>(`/projects/all`);
  }

  public getLasts() {
    return this.client.get<Project[]>(`/projects/lasts`);
  }

  public getOne(projectId: string) {
    return this.client.get<Project>(`/projects/${projectId}`);
  }

  public create(project: Project) {
    return this.client.post<Project>(`/projects`, project);
  }

  public update(project: Project) {
    return this.client.put<Project>(`/projects/${project.id}`, project);
  }

  public delete(projectId: string) {
    return this.client.delete<Project>(`/projects/${projectId}`);
  }
}
