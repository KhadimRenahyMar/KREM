import { AxiosInstance } from "axios";
import { Tech } from "../interfaces/tech";
import { Project } from "../interfaces/project";

export default class TechApi {
  public constructor(private readonly client: AxiosInstance) { }

  public getAll(projects: Project[]) {
    return this.client.post<Tech[]>(`/techs`, projects);
  }

  public getOne(techId: string) {
    return this.client.get<Tech>(`/techs/${techId}`);
  }

  public create(tech: Tech) {
    return this.client.post<Tech>(`/techs`, tech);
  }

  public update(tech: Tech) {
    // return this.client.put<Tech>(`/techs/${tech.id}`, tech);
  }
}
