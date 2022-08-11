import { Router } from "express";
import mainController from "../controllers/mainController";
import projectController from "../controllers/projectController";
import techController from "../controllers/techController";

const router = Router();
router.get('/', mainController.homepage);
router.get('/projects/all', projectController.getAllProjects);
router.get('/projects/lasts', projectController.getLastProjects);
router.post('/projects/:projectId', projectController.getProject);
router.post('/techs', techController.getAllTechs);
router.get('/userInfos', mainController.getUserInfo);
router.get('/getGifs', mainController.getGifs);
export default router;