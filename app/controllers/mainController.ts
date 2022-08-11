import { Request, Response } from "express";
import dataMapper from "../dataMapper";
import projectController from "./projectController";

const mainController = {
    homepage: async (req: Request, res: Response) => {
        // console.log('coucou');
        // const lastProjects = await projectController.getLastProjects(req, res);

        // console.log(lastProjects);
        // res.json(lastProjects);
    },

    getUserInfo: async (req: Request, res: Response) => {
        async function getContributions(token: string, username: string) {
            const headers = {
                'Authorization': `bearer ${token}`,
            }
            const body = {
                "query": `query {
                    user(login: "${username}") {
                        contributionsCollection {
                            contributionCalendar {
                                colors
                                totalContributions
                                weeks {
                                    contributionDays {
                                        color
                                        contributionCount
                                        date
                                        weekday
                                    }
                                    firstDay
                                }
                            }
                        }
                        repositories(isFork: false) {
                            totalCount
                        }
                    }
                }`
            }
            const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
            const data = await response.json();
            return data
        }
        const data = await getContributions(`${process.env.GITHUB_TOKEN}`, 'KhadimRenahyMar')
        
        const moreData = await fetch('https://api.github.com/users/KhadimRenahyMar/repos');
        const result = await moreData.json();
        let repoCount = 0;
        for(const repo of result){
            repoCount += 1;
        }
        
        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        const weeks: object[] = calendar.weeks;
        const contribs = [];
        for(const week of weeks) {
            for(const days of Object.entries(week)[0]){
                for(const day of days){
                    if(day.contributionCount > 0){
                        contribs.push(day);
                    }
                }
            }
        };
        const lastContrib = contribs.slice(-1)[0];
        const avgCommitWeek = Math.round(calendar.totalContributions / 52);
        const lastProject = result.slice(-1)[0].name;
        
        const obj = {
            public_repos : repoCount,
            reposCount : data.data.user.repositories.totalCount,
            commitCount : calendar.totalContributions,
            lastCommit : lastContrib.date,
            contribPerWeek : avgCommitWeek,
            lastProject: lastProject
        }
        res.json(obj);
    },
    getGifs: async (req: Request, res: Response) => {
        const gifs = await dataMapper.getGifsFromCDN();
        // console.log(gifs);
        res.json(gifs);
    },
};

export default mainController;