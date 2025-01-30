const api_url: string = 'https://api.github.com/users/KhadimRenahyMar/repos';
const api_content_url: string = 'https://api.github.com/repos/KhadimRenahyMar';
const api_cover_url: string =
    'https://raw.githubusercontent.com/KhadimRenahyMar';
const authToken = process.env.GITHUB_TOKEN;

import axios from 'axios';
import {
    ResourceApiResponse,
    UploadApiResponse,
    v2 as cloudinary,
} from 'cloudinary';
import path from 'path';
import {
    CloudinarySearch,
    Resource,
} from '../client/src/interfaces/cloudinarySearch';

type project = {
    name: string;
};
type CloudinaryResponse = UploadApiResponse | ResourceApiResponse;

const dataMapper = {
    async getRepos() {
        try {
            const { data } = await axios.get(api_url, {
                headers: {
                    Authorization: `token ${authToken}`,
                    Accept: 'application/vnd.github.v3.raw',
                },
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getProjectConfig(project: project) {
        try {
            const url = `${api_content_url}/${project.name}/contents/portfolio/projectConfig.json`;
            const { data } = await axios(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    Accept: 'application/vnd.github.v3.raw',
                },
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getScreenshots(project: string) {
        try {
            const url = `${api_content_url}/${project}/contents/portfolio/screenshots`;
            const { data } = await axios(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    Accept: 'application/vnd.github.v3.raw',
                },
            });
            console.log('---- data', data);
            const folder: CloudinarySearch = await cloudinary.search
                .expression(`folder:"KREM/${project}"`)
                .execute();

            console.log(
                'getScreenshots remaining',
                folder.rate_limit_remaining
            );

            let cloudinaryResults: CloudinaryResponse[] = [];
            if (data.message === 'Not Found') {
                return cloudinaryResults;
            } else {
                for (let img of data) {
                    img.name = path.parse(img.name).name;

                    const found = folder.resources.find(
                        (resource) => resource.filename === img.name
                    );
                    if (found === undefined || folder.total_count <= 1) {
                        const newImg = await cloudinary.uploader.upload(
                            `${img.download_url}`,
                            {
                                public_id: `${img.name}`,
                                folder: `KREM/${project}`,
                            }
                        );

                        if (!cloudinaryResults.includes(newImg)) {
                            cloudinaryResults.push(newImg);
                        }
                    } else {
                        const screenshots: any = folder.resources.filter(
                            (resource) => resource.folder === `KREM/${project}`
                        );
                        for (let screenshot of screenshots) {
                            if (!cloudinaryResults.includes(screenshot)) {
                                cloudinaryResults.push(screenshot);
                            }
                        }
                    }
                }
                return cloudinaryResults;
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getText(name: string) {
        try {
            const url: string = `${api_content_url}/${name}/contents/portfolio/text.md`;
            const { data } = await axios(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    Accept: 'application/vnd.github.v3.raw',
                },
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getGifsFromCDN() {
        const folder = await cloudinary.search
            .expression(`folder:"KREM/GIFS"`)
            .execute();
        console.log('getGifsFromCDN remaining', folder.rate_limit_remaining);
        return folder.resources;
    },
};

export default dataMapper;
