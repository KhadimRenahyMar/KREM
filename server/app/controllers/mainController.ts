import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';

const mainController = {
    homepage: async (req: Request, res: Response) => {
        const projects = await Project.findAll({
            include: [ 'screenshots', 'texts', 'techs', 'tags'],
        });
        res.json(projects);
    },
};

export default mainController;