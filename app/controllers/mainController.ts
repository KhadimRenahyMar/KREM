import { Request, Response } from "express";
import { Project, Screenshot, Tech, Text } from '../models';

const mainController = {
    homepage: async (req: Request, res: Response) => {
        
    },

    404: (req: Request, res: Response) => {
        res.json('nope');
    }
};

export default mainController;