import { Request, Response } from "express";
import dataMapper from "../dataMapper";
import { project } from "./projectController";

const techController = {
    getAllTechs: async (req: Request, res: Response) => {
        let finalTechList = [];
        const projects: project[] = req.body.data;

        if (projects.length > 0) {
            const techs: Array<any> = [];
            for (const project of projects) {
                for (let tech of project.techs) {
                    if (!techs.includes(tech)) {
                        techs.push(tech);
                    }
                }
            }
            const logos = await dataMapper.getLogosFromCDN();
            const techList: Array<any> = [];
            techs.forEach((tech) => {
                let obj: { name: string; count: number; packages: string[], logo: string } = {
                    name: '',
                    count: 0,
                    packages: [],
                    logo: "",
                };
                obj.name = tech.name;
                const techLogo = logos.find((logo: any) => logo.filename === obj.name);
                for (let tech of techs) {
                    if (tech.name === obj.name) {
                        obj.logo = techLogo;
                        obj.count += 1;
                        for(let packg of tech.packages){
                            if (!obj.packages.includes(packg)) {
                                obj.packages.push(packg);
                            }
                        }
                    }
                }

                if (!techList.find(techno => Object.values(techno)[0] === obj.name)) {
                    techList.push(obj);
                }
            })
            finalTechList.push(...techList);
        }

        res.json(finalTechList);
    },
};

export default techController;