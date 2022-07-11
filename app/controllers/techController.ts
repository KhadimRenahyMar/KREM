import { Request, Response } from "express";
import projectController from "./projectController";
import expressSession from 'express-session'; 
import { project } from "./projectController";
function formatTechList() {
    
}

const techController = {
    getAllTechs: async (req: Request, res: Response) => {
        req.session.techs = [];
        const projects: project[] = req.body.data;
        if (projects.length > 0) {
            const techs: string[] = [];
            for (const project of projects) {
                for (let tech of project.techs) {
                    techs.push(tech.toString());
                }
            }

            const techList: object[] = [];
            techs.forEach((tech) => {
                let obj = {
                    name: '',
                    count: 0,
                };
                obj.name = tech.toString();

                for (let tech of techs) {
                    if (tech === obj.name) {
                        obj.count += 1;
                    }
                }

                if(!techList.find(techno => Object.values(techno)[0] === obj.name)){
                    techList.push(obj);
                }
            })
            // console.log('techList', techList);
            req.session.techs.push(...techList);
        }
        res.json(req.session.techs);
    },

    getTechsByProjects: async (req: Request, res: Response) => {
        // const techs = await Tech.findAll({
        //     include: ['projects'],
        // });
        // res.json(techs);
    },
};

export default techController;