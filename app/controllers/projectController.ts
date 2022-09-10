import { Request, Response } from "express";
import dataMapper from "../dataMapper";

export type project = {
    name: string,
    desc: string,
    url: string,
    repoURL: string,
    coverURL?: object,
    size: string,
    descTechs: string[],
    techs: Object[],
    screenshots: Object[],
    components: string[],
    designPatterns: string[],
    text: string,
    createdAt: Date,
    [key: string]: any;
}

let fetchCount = 0;

async function getAllProjects() {
    const fetchedProjects: project[] = await dataMapper.getRepos();
    const formattedProjects: project[] = [];
    for (let project of fetchedProjects) {
        project = await formatProject(project);
        formattedProjects.push(project);
    }
    return formattedProjects;
};

async function formatProject(fetchedProject: project) {
    const data = await dataMapper.getProjectConfig(fetchedProject);
    let cover = await dataMapper.getCoverFromCDN(fetchedProject.name, data.coverURL);
    const project: project = {
        name: fetchedProject.name,
        desc: fetchedProject.description,
        url: data.url,
        repoURL: fetchedProject.html_url,
        coverURL: cover,
        size: data.size,
        descTechs: data.mainTechs,
        techs: data.techs,
        screenshots: [],
        components: data.components,
        designPatterns: data.designPatterns,
        text: `Désolé ce projet n'a pas encore de récit détaillé, revenez plus tard !`,
        createdAt: new Date(fetchedProject.created_at)
    };
    return project;
};

const projectController = {
    getAllProjects: async (req: Request, res: Response) => {
        console.log("START");
        let projectList: project[] = [];

        if (fetchCount === 0) {
            fetchCount += 1;
            const projects: project[] = await getAllProjects();
            projectList = projects;
            fetchCount = 0;
        }
        res.json(projectList);
    },

    getProject: async (req: Request, res: Response) => {
        const project: project = req.body.body;
        const screenshots = await dataMapper.getScreenshots(project.name);
        if (screenshots) {
            project.screenshots.push(...screenshots);
        }
        const text = await dataMapper.getText(project.name);
        if (text) {
            project.text = text;
        }
        res.json(project);
    },
};

export default projectController;