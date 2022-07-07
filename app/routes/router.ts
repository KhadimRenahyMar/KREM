import { Router } from "express";
import mainController from "../controllers/mainController";
import projectController from "../controllers/projectController";
import techController from "../controllers/techController";

const router = Router();
router.get('/', mainController.homepage);
router.get('/projects', projectController.projects);
router.get('/projects/:projectId', projectController.project);
router.get('/techs', techController.getAllTechs);
export default router;