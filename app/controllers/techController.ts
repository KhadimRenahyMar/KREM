import { Request, Response } from "express";
import { project } from "../middleware/session";
import { Project, Screenshot, Tech, Text } from '../models';
import projectController from "./projectController";

function formatTechList(){

}

const techController = {
    getAllTechs: async (req: Request, res: Response) => {
        const projects: project[] = req.body.data;
        if(projects.length > 0){
            console.log('projects in techs')
            
            for(const project of projects){
                const techs = [];
                let count = 0;
                for(let tech of project.techs){
                    const techObj = {
                        name: tech,
                        usage: count+=1,
                    }
                    techs.push(techObj);
                }
                req.session.techs.push(techs);
                console.log(`techs ${project.name}`, techs);
                project.techs.push(...techs);
                // console.log('project.techs after', project.techs);
            
            }
        }

        // res.json(techs);
    },

    getTechsByProjects: async (req: Request, res: Response) => {
        const techs = await Tech.findAll({
            include: ['projects'],
        });
        res.json(techs);
    },
};

export default techController;