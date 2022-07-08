const api_url: string = 'https://api.github.com/users/KhadimRenahyMar/repos';
const api_content_url: string = 'https://api.github.com/repos/KhadimRenahyMar';
const authToken = process.env.GITHUB_TOKEN;

type project = {
    name: string,
    [key: string]: any;
}

const dataMapper = {
    async getRepos() {
        const data = await fetch(api_url);
        const result = await data.json();
        // console.log(result);
        return result;
    },

    async getProjectConfig(project: project) {
        try {
            const url = `${api_content_url}/${project.name}/contents/portfolio/projectConfig.json`;
            // console.log(url);
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });

            const result = await data.json();
            // console.log(`result ${project.name}`, result);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

    async getScreenshots(project: project) {
        try {
            const url = `${api_content_url}/${project.name}/contents/portfolio/screenshots`;
            // console.log(url);
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.json();
            console.log(`result ${project.name}`, result);
            return result;
        } catch (error) {
            // console.log(error);
        }
    },

    async getText(project: project) {
        try {
            const url = `${api_content_url}/${project.name}/contents/portfolio/text.md`;
            // console.log(url);
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Accept': 'application/vnd.github.v3.raw',
                }
            });
            const result = await data.json();
            console.log(`result ${project.name}`, result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

export default dataMapper;