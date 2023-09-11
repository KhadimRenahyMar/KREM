import axios, { AxiosInstance } from "axios";
import ProjectApi from "./ProjectApi";
import CloudinaryApi from "./CloudinaryApi";
import { Cloudinary } from "@cloudinary/url-gen";
import TechApi from "./TechApi";
import StatsApi from "./stats";

export default class Api {
  private readonly client: AxiosInstance;
  public readonly project: ProjectApi;
  public readonly tech: TechApi;
  public readonly cdn: CloudinaryApi;
  public readonly stats: StatsApi;

  public baseURL = process.env.NODE_ENV === "production" ? "https://www.krem.fr" : "http://localhost:5050";
  public constructor() {
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-type": "application/json",
      }
    })

    const cld = new Cloudinary({
      cloud: {
        cloudName: "ddjt1r39a",
      },
    });

    this.project = new ProjectApi(this.client);
    this.tech = new TechApi(this.client);
    this.cdn = new CloudinaryApi(this.client, cld);
    this.stats = new StatsApi(this.client);
  }
}