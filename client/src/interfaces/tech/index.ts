interface Tech {
  name: string;
  packages: string[];
  count: number;
}


interface ProjectTechs {
  name: string;
  packages: string[]
}

export type { Tech, ProjectTechs }