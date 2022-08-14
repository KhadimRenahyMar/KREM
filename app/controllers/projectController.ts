import { Request, Response } from "express";
import dataMapper from "../dataMapper";
// import session from 'express-session';


declare module "express-session" {
    interface Session {
        test: string,
        projects: project[],
        lastProjects: project[],
        project: project,
        techs: object[]
    }
}

export type project = {
    name: string,
    desc: string,
    url: string,
    repoURL: string,
    coverURL?: string,
    size: string,
    techs: Object[],
    screenshots: Object[],
    packages: Object[],
    components: string[],
    designPatterns: string[],
    text: string,
    createdAt: Date,
    pushedAt: Date,
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
    // console.log('formatted projects', formattedProjects)
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
        techs: data.techs,
        screenshots: [],
        packages: data.packages,
        components: data.components,
        designPatterns: data.designPatterns,
        text: `Désolé ce projet n'a pas encore de récit détaillé, revenez plus tard !`,
        createdAt: new Date(fetchedProject.created_at),
        pushedAt: new Date(fetchedProject.pushed_at)
    };
    return project;
};

async function getProjectScreenshots(projectName: string) {
    const data = await dataMapper.getScreenshots(projectName);
    return data;
}

async function getProjectText(projectName: string) {
    const data = await dataMapper.getText(projectName);
    return data;
}

const projectController = {
    getAllProjects: async (req: Request, res: Response) => {
        console.log("START");
        req.session.projects = [];

        if (fetchCount === 0) {
            fetchCount += 1;
            const projects: project[] = await getAllProjects();
            req.session.projects = projects;
            fetchCount = 0;
        }

        console.log('projects', req.session.projects.length);
        res.json(req.session.projects);
    },

    getProject: async (req: Request, res: Response) => {
        const project: project = req.body.body;
        const screenshots = await getProjectScreenshots(project.name);
        if (screenshots) {
            project.screenshots.push(...screenshots);
        }
        const text = await getProjectText(project.name);
        if (text) {
            project.text = text;
        }
        res.json(project);
    },

    getLastProjects: async (req: Request, res: Response) => {
        console.log(req.session.lastProjects);
        if (req.session.lastProjects === undefined) {
            req.session.lastProjects = [];
            req.session.projects = await getAllProjects();
            const sortedProjects = req.session.projects.sort((a, b) => Number(b.createdAt.getTime()) - Number(a.createdAt.getTime())).slice(0, 5);
            req.session.lastProjects.push(...sortedProjects);
        }
        else {
            const sortedProjects = req.session.projects.sort((a, b) => Number(b.createdAt.getTime()) - Number(a.createdAt.getTime())).slice(0, 5);
            req.session.lastProjects.push(...sortedProjects);
        }
        // console.log(req.session.lastProjects);
        res.json(req.session.lastProjects);
    },
};

export default projectController;