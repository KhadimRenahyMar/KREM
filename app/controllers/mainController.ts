import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';
import projectController from "./projectController";

const mainController = {
    homepage: async (req: Request, res: Response) => {
        // console.log('coucou');
        // const lastProjects = await projectController.getLastProjects(req, res);
        
        // console.log(lastProjects);
        // res.json(lastProjects);
    },

    404: (req: Request, res: Response) => {
        res.json('nope');
    }
};

export default mainController;