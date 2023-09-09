interface Tech {
  name: string;
  packages: string[];
  logo: any;
  count: number;
}


interface ProjectTechs {
  name: string;
  packages: string[]
}

export type { Tech, ProjectTechs }