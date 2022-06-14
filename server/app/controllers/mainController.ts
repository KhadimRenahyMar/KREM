import { Request, Response } from "express";
const mainController = {
    homepage: (req: Request, res: Response) => {
        
        res.json('All good');
    },
};


export default mainController;