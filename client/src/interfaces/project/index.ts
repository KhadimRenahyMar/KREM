import { ProjectTechs } from "../tech";

interface Project {
  name: string;
  size: "XS" | "S" | "M" | "L" | "XL";
  desc: string;
  url: string;
  repoURL: string;
  coverURL: {
    version: string;
    path: string;
    url: string;
  }
  text: string;
  techs: ProjectTechs[];
  components: string[];
  descTechs: string[];
  designPatterns: string[];
  screenshots: any[]; // improve type when screenshots are fixed
  createdAt: string;
  [key: string]: any;
}

export type { Project }