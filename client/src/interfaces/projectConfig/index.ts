export interface ProjectConfig {
  url: string,
  coverURL: string,
  size: "XS" | "S" | "M" | "L" | "XL",
  mainTechs: string[],
  techs: { name: string, packages: string[] }[],
  designPatterns: string[],
  components: string[]
}