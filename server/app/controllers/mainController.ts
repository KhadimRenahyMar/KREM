import { Request, Response } from "express";
import { Project, Tech } from '../models';

const mainController = {
    homepage: async (req: Request, res: Response) => {
        const projects = await Project.findAll();
        res.json(projects);
    },
};

export default mainController;