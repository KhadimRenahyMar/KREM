import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';

const projectController = {
    projects: async (req: Request, res: Response) => {
        const projects = await Project.findAll({
            include: [ 'screenshots', 'texts', 'techs', 'tags'],
        });
        res.json(projects);
    },
    
    project: async (req: Request, res: Response) => {
        const projectId = req.params.projectId;
        console.log(projectId);
        const project = await Project.findAll({
            where: {
                id : projectId,
            },
            include: [ 'screenshots', 'texts', 'techs', 'tags'],
        });
        res.json(project);
    },
};

export default projectController;