import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';
import dataMapper from "../dataMapper";
// import session from 'express-session';

declare module "express-session" {
    interface Session {
        test: string,
        projects: project[],
        lastProjects: project[],
    }
}

type project = {
    name: string,
    desc: string,
    url: string,
    repoURL: string,
    coverURL: string,
    size: string,
    techs: Object[],
    screenshots: Object[],
    packages: Object[],
    text: string,
    createdAt: Date,
    pushedAt: Date,
    [key: string]: any;
}

// const lastProjects: project[] = [];
let fetchCount = 0;

async function getAllProjects() {
    const fetchedProjects: project[] = await dataMapper.getRepos();
    const formattedProjects: project[] = [];
    for(let project of fetchedProjects){
        project = await formatProject(project);
        formattedProjects.push(project);
    }
    // console.log('formatted projects', formattedProjects)
    return formattedProjects;
};

async function formatProject(fetchedProject: project) {
    const data = await dataMapper.getProjectConfig(fetchedProject);
    const project: project = {
        name: fetchedProject.name,
        desc: fetchedProject.description,
        url: data.url,
        repoURL: fetchedProject.html_url,
        coverURL: data.coverURL,
        size: data.size,
        techs: data.techs,
        screenshots: [],
        packages: data.packages,
        text: '',
        createdAt: new Date(fetchedProject.created_at),
        pushedAt: new Date(fetchedProject.pushed_at)
    }; 
    return project;
};

async function getProjectScreenshots(projectName: string) {
    const data = await dataMapper.getScreenshots(projectName);
    // console.log(data);
    return data;
}

async function getProjectText(projectName: string) {
    const data = await dataMapper.getText(projectName);
    // console.log(data);
    return data;
}
// function scrapTechs(){
//     const techs = [];
//     for (const project of projects) {
//         console.log(project.techs);
//         for(const tech of project.techs){
//             // console.log(tech);
//         }
//     }
//     projects.forEach((project) => {
//     }); 
// };

const projectController = {
    getAllProjects: async (req: Request, res: Response) => {
        req.session.projects = [];
        console.log("START");

        if (fetchCount === 0) {
            fetchCount += 1;
            const projects: project[] = await getAllProjects();
            req.session.projects.push(...projects);
            fetchCount = 0;
        }

        // console.log('projects', projects.length);
        res.json(req.session.projects);
    },

    getProject: async (req: Request, res: Response) => {
        const projectName: string = req.params.projectId;
        const project: project = req.body.body;
        // console.log(project);
        const screenshots = await getProjectScreenshots(project.name);
        project.screenshots.push(...screenshots);
        const text = await getProjectText(project.name);
        if(text){
            project.text = text;
        }

        // console.log(project);
        res.json(project);
    },

    // getProjectText: async (project: project) => {
    //     // console.log('projectID', projectName);
    //     const text = await dataMapper.getText(project.name);
    //     // console.log(text);
    //     // const project = await Project.findAll({
    //     //     where: {
    //     //         id: projectId,
    //     //     },
    //     //     include: ['screenshots', 'texts', 'techs', 'tags'],
    //     // });
    //     return text;
    // },

    getLastProjects: async (req: Request, res: Response) => {
        // console.log(req.session.projects);
        req.session.lastProjects = [];
        if (req.session.lastProjects.length === 0) {
            if (!req.session.projects) {
                req.session.projects = await getAllProjects();
                const sortedProjects = req.session.projects.sort((a, b) => Number(b.createdAt.getTime()) - Number(a.createdAt.getTime())).slice(0, 5);
                req.session.lastProjects.push(...sortedProjects);
            }
            else{  
                const sortedProjects = req.session.projects.sort((a, b) => Number(b.createdAt.getTime()) - Number(a.createdAt.getTime())).slice(0, 5);
                req.session.lastProjects.push(...sortedProjects);
            }
        }
        // console.log(req.session.lastProjects);
        res.json(req.session.lastProjects);
    },
};

export default projectController;