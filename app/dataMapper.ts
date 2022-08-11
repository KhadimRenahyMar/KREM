const api_url: string = 'https://api.github.com/users/KhadimRenahyMar/repos';
const api_content_url: string = 'https://api.github.com/repos/KhadimRenahyMar';
const authToken = process.env.GITHUB_TOKEN;

import { v2 as cloudinary } from 'cloudinary';
import path from 'path';

type project = {
    name: string,
    // [key: string]: any;
}
type file = {
    name: string,
    path: string
}

const dataMapper = {
    async getRepos() {
        try {
            const data = await fetch(api_url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.json();
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    async getProjectConfig(project: project) {
        try {
            const url = `${api_content_url}/${project.name}/contents/portfolio/projectConfig.json`;
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.json();
            // console.log(`result ${project.name}`, result.length);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    async getScreenshots(project: string) {
        try {
            const url = `${api_content_url}/${project}/contents/portfolio/screenshots`;
            // console.log(url);
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.json();

            const folder = await cloudinary.search.expression(
                `folder:"KREM/${project}"`,
            ).execute();

            let cloudinaryResults: any = [];
            for (let img of result) {
                img.name = path.parse(img.name).name;

                const found = folder.resources.find((resource: any) => resource.filename === img.name);
                if (found === undefined || folder.total_count <= 1) {
                    const newImg = await cloudinary.uploader.upload(`${img.download_url}`, {
                        public_id: `${img.name}`,
                        folder: `KREM/${project}`,
                    });

                    if (!cloudinaryResults.includes(newImg)) {
                        cloudinaryResults.push(newImg);
                    }
                }
                else {
                    folder.resources.forEach((resource: any) => {
                        if (resource.folder === `KREM/${project}`) {
                            if (!cloudinaryResults.includes(resource)) {
                                cloudinaryResults.push(resource);
                            }
                        }
                    });
                }
            };

            return cloudinaryResults;
        } catch (error) {
            console.log(error);
        }
    },

    async getText(name: string) {
        try {
            const url: string = `${api_content_url}/${name}/contents/portfolio/text.md`;
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.text();

            if (result.charAt(0) !== '{') {
                return result;
            }

        } catch (error) {
            console.log(error);
        }
    },

    async getCoverFromCDN(projectName: string, cover: string) {
        try {
            const folder = await cloudinary.search.expression(
                `folder:"KREM/${projectName}"`,
            ).execute();

            const coverName = path.parse(cover).name;
            let foundImg = folder.resources.find((resource: any) => resource.filename === coverName);

            if (foundImg === undefined) {
                foundImg = await cloudinary.uploader.upload(`${cover}`, {
                    public_id: `${coverName}`,
                    folder: `KREM/${projectName}`
                });
            }
            const response = `${foundImg.public_id}.${foundImg.format}`
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async getLogosFromCDN() {
        const folder = await cloudinary.search.expression(
            `folder:"KREM/logos"`,
        ).execute();
        console.log("remaining",folder.rate_limit_remaining);
        for (let logo of folder.resources) {
            let image = cloudinary.image(`${logo.filename}.${logo.format}`, {
                transformation: [
                    { dpr: "auto", responsive: true, width: 16, height: 16, crop: "scale" },
                    { fetch_format: 'webp' }
                ]
            })
            logo = image;
        }
        return folder.resources;
    },

    async getGifsFromCDN() {
        const folder = await cloudinary.search.expression(
            `folder:"KREM/GIFS"`,
        ).execute();
        console.log("remaining",folder.rate_limit_remaining);
        return folder.resources;
    },
}

export default dataMapper;