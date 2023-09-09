export interface Experience {
  date: string;
  title: string;
  type: string;
  description: string;
  list?: (string | { text: string; link: { url: string, name: string } })[] | undefined;
  skills: {
    label: string;
    webProjectName: string;
  }[];
};