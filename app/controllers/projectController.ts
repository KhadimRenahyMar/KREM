import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';
import dataMapper from "../dataMapper";

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

const projects: project[] = [];
const lastProjects: project[] = [];

async function formatProject(fetchedProjects: project[]) {
    const formattedProjects: project[] = [];

    for (const fetchedProject of fetchedProjects) {
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
        formattedProjects.push(project);
    };
    projects.push(...formattedProjects);
    // console.log(formattedProjects);
};

const projectController = {
    getAllProjects: async (req: Request, res: Response) => {
        if (projects.length === 0) {
            const fetchedProjects: project[] = await dataMapper.getRepos();
            // console.log(fetchedProjects);
            await formatProject(fetchedProjects);
            // console.log('projects', projects);
        }
        res.json(projects);
    },

    getProject: async (req: Request, res: Response) => {
        const projectId = req.params.projectId;
        // console.log(projectId);
        // const project = await Project.findAll({
        //     where: {
        //         id: projectId,
        //     },
        //     include: ['screenshots', 'texts', 'techs', 'tags'],
        // });
        // res.json(project);
    },

    getLastProjects: async (req: Request, res: Response) => {
        if(lastProjects.length === 0){
            console.log('taille projects', projects.length);
            const sortedProjects = projects.sort((a, b) => Number(b.createdAt.getTime()) - Number(a.createdAt.getTime())).slice(0,5);
            lastProjects.push(...sortedProjects);
        }
        // console.log(lastProjects);
        res.json(lastProjects);
    },
};

export default projectController;