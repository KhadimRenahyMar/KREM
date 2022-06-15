import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';

const mainController = {
    homepage: async (req: Request, res: Response) => {
        
    },
    projects: async (req: Request, res: Response) => {
        const projects = await Project.findAll({
            include: [ 'screenshots', 'texts', 'techs', 'tags'],
        });
        res.json(projects);
    },
    404: (req: Request, res: Response) => {
        res.json('nope');
    }
};

export default mainController;