import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';
import projectController from "./projectController";

const techController = {
    getAllTechs: async (req: Request, res: Response) => {
        const techs = await Tech.findAll({
            include: [ 'projects'],
        });
        res.json(techs);
    },

    getTechsByProjects: async (req: Request, res: Response) => {
        const techs = await Tech.findAll({
            include: ['projects'],
        });
        res.json(techs);
    },
};

export default techController;