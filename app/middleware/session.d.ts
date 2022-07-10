import expressSession from 'express-session'; 

type project = {
    name: string,
    desc: string,
    url: string,
    repoURL: string,
    coverURL: string,
    size: string,
    techs: Object[],
    screenshots: Object[],
    packages: Object[],
    text: string,
    createdAt: Date,
    pushedAt: Date,
    [key: string]: any;
}

declare module "express-session" {
    export interface Session {
        test: string,
        projects: project[],
        lastProjects: project[],
        techs: [],
    }
}

