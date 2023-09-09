import { AxiosInstance } from "axios";
import { Project } from "../interfaces/project";
import { dpr, format, quality } from "@cloudinary/url-gen/actions/delivery";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { autoBest } from "@cloudinary/url-gen/qualifiers/quality";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resource } from "../interfaces/cloudinarySearch";

export default class CloudinaryApi {
  public constructor(
    private readonly client: AxiosInstance,
    private readonly cld: Cloudinary) {
  }


  public async getAll(projects: Project[], width: number) {
    return projects.map((project) => {
      if (project.coverURL) {
        const responsiveURL = this.cld
          .image(`${project.coverURL.path}`)
          .resize(scale().width(width))
          .setVersion(project.coverURL.version)
          .delivery(format(auto()))
          .delivery(dpr(2.0))
          .delivery(quality(autoBest()));
        project.coverURL.url = responsiveURL.toURL();
        return project;
      } else {
        project.coverURL = {} as any;
        return project;
      }
    })
  }

  public getLasts() {
    // return this.client.get<[]>(`/projects/lasts`);
  }

  public getOne(projectId: string) {
    // return this.client.get<>(`/projects/${projectId}`);
  }

  public async getAllGifs() {
    return this.client.get<Resource[]>(`/getGifs`);
  }

  public async formatAllGIfs(gifs: Resource[], width: number) {
    return gifs.map((gif) => {
      if (gif.format === "webp") {
        return {
          name: gif.filename,
          url: this.cld.image(`${gif.public_id}.${gif.format}`)
            .setVersion(gif.version)
            .resize(scale().width(width))
            .delivery(format("webm"))
            .delivery(quality(autoBest())).toURL()
        }
      }
      return {
        name: gif.filename,
        url: this.cld.video(`${gif.public_id}.${gif.format}`)
          .setVersion(gif.version)
          .resize(scale().width(width))
          .delivery(quality(autoBest())).toURL()
      }
    })
  }

  public create(shots: Resource[], width: number) {
    return shots.map((shot) => {
      return this.cld
        .image(`${shot.public_id}`)
        .format("webp")
        .quality("auto")
        .resize(scale().width(width))
        .setVersion(shot.version).toURL();
    })
  }

}
