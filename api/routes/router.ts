import { Router } from "express";
import mainController from "../controllers/mainController";
import projectController from "../controllers/projectController";
import techController from "../controllers/techController";
const router = Router();

router.get('/api/projects/all', projectController.getAllProjects);
router.get('/api/projects/:projectId', projectController.getProject);
router.post('/api/techs', techController.getAllTechs);
router.get('/api/userInfos', mainController.getUserInfo);
router.get('/api/getGifs', mainController.getGifs);
export default router;