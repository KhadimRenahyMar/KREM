import { Router } from "express";
import mainController from "../controllers/mainController";
import projectController from "../controllers/projectController";
import techController from "../controllers/techController";

const router = Router();
router.get('/', mainController.homepage);
router.get('/projects/all', projectController.getAllProjects);
router.get('/projects/lasts', projectController.getLastProjects);
router.get('/projects/:projectId', projectController.getProject);
router.get('/techs', techController.getAllTechs);
export default router;