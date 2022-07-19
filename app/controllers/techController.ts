import { Request, Response } from "express";
import projectController from "./projectController";
import { project } from "./projectController";
function formatTechList() {

}

const techController = {
    getAllTechs: async (req: Request, res: Response) => {
        console.log('TECHS');
        req.session.techs = [];
        const projects: project[] = req.body.data;

        if (projects.length > 0) {
            const techs: Array<any> = [];
            for (const project of projects) {
                for (let tech of project.techs) {
                    techs.push(tech);
                }
            }

            const techList: Array<any> = [];
            techs.forEach((tech) => {
                let obj: { name: string; count: number; packages: string[] } = {
                    name: '',
                    count: 0,
                    packages: [],
                };
                obj.name = tech.name;

                for (let tech of techs) {
                    if (tech.name === obj.name) {
                        obj.count += 1;
                        obj.packages.push(...tech.packages);
                    }
                }

                if (!techList.find(techno => Object.values(techno)[0] === obj.name)) {
                    techList.push(obj);
                }
            })

            // console.log('techList', techList);
            req.session.techs.push(...techList);
        }
        
        res.json(req.session.techs);
    },
};

export default techController;