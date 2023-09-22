import { Request, Response } from "express";
import dataMapper from "../dataMapper";
import { Project } from "../../client/src/interfaces/project";
import { ProjectConfig } from "../../client/src/interfaces/projectConfig";

async function getAllProjects() {
  const fetchedProjects: Project[] = await dataMapper.getRepos();
  const formattedProjects: Project[] = [];

  for (const project of fetchedProjects) {
    const projectConfig: ProjectConfig = await dataMapper.getProjectConfig(project);
    const cover = await dataMapper.getCoverFromCDN(project.name, projectConfig.coverURL);
    const formattedProject = formatProject(project, projectConfig, cover);
    formattedProjects.push(formattedProject);
  }

  return formattedProjects;
};

function formatProject(fetchedProject: Project, projectConfig: ProjectConfig, cover: any) {
  return {
    name: fetchedProject.name,
    desc: fetchedProject.description,
    url: projectConfig.url,
    repoURL: fetchedProject.html_url,
    coverURL: cover,
    size: projectConfig.size,
    descTechs: projectConfig.mainTechs,
    techs: projectConfig.techs,
    screenshots: [],
    components: projectConfig.components,
    designPatterns: projectConfig.designPatterns,
    text: ``,
    createdAt: new Date(fetchedProject.created_at).toString()
  };
};

const projectController = {
  getAllProjects: async (req: Request, res: Response) => {
    console.log("START");
    const projectList: Project[] = await getAllProjects();
    res.json(projectList);
  },

  getProject: async (req: Request, res: Response) => {
    const projects = await dataMapper.getRepos();
    if (!projects) {
      throw new Error("Project list undef in projectController.getProject");
    }

    const project = projects.find((p: Project) => p.name === req.params.projectId);
    if (!project) {
      res.json(new Error("No project found in project List in projectController.getProject"))
      return;
    }


    const projectConfig = await dataMapper.getProjectConfig(project);
    const cover = await dataMapper.getCoverFromCDN(project.name, projectConfig.coverURL);
    const formattedProject: Project = formatProject(project, projectConfig, cover);

    const screenshots = await dataMapper.getScreenshots(formattedProject.name);

    if (screenshots) {
      formattedProject.screenshots.push(...screenshots);
    }
    const text = await dataMapper.getText(formattedProject.name);
    if (text) {
      formattedProject.text = text;
    }
    res.json(formattedProject);
  },
};

export default projectController;