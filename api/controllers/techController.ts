import { Request, Response } from "express";
import dataMapper from "../dataMapper";
import { Project } from "../../client/src/interfaces/project";
import { Resource } from "../../client/src/interfaces/cloudinarySearch";
import { ProjectTechs, Tech } from "../../client/src/interfaces/tech";

const techController = {
  getAllTechs: async (req: Request, res: Response) => {
    const projects: Project[] = req.body;
    if (projects.length === 0) {
      res.json(new Error("No project received"));
    }

    const techs = projects.reduce((acc: ProjectTechs[], project) => {
      return acc.concat(project.techs);
    }, []);

    const logos = await dataMapper.getLogosFromCDN();

    const techList: Tech[] = techs.reduce((acc: Tech[], tech) => {
      const techInList = acc.find((t) => t.name === tech.name);
      if (!techInList) {
        const newTech = {
          name: tech.name,
          count: 1,
          packages: tech.packages,
          logo: logos.find((logo: Resource) => logo.filename === tech.name),
        }
        return [...acc, newTech];
      }

      const updatedAcc: Tech[] = acc.map((t) => t.name === tech.name ? {
        name: t.name,
        logo: t.logo,
        count: t.count + 1,
        packages: [...new Set(t.packages.concat(tech.packages))]
      } : t)
      return [...updatedAcc]
    }, []);

    res.json(techList);
  },
};

export default techController;