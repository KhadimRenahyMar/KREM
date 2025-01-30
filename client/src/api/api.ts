import axios, { AxiosInstance } from "axios";
import ProjectApi from "./ProjectApi";
import CloudinaryApi from "./CloudinaryApi";
import { Cloudinary } from "@cloudinary/url-gen";
import TechApi from "./TechApi";
import StatsApi from "./stats";

const Api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://www.krem.fr" : "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

const cld = new Cloudinary({
  cloud: {
    cloudName: "ddjt1r39a",
  },
});

export default {
  project: new ProjectApi(Api),
  tech: new TechApi(Api),
  cdn: new CloudinaryApi(Api, cld),
  stats: new StatsApi(Api),
};
