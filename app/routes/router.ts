import { Router } from "express";
import mainController from "../controllers/mainController";
import projectController from "../controllers/projectController";
import techController from "../controllers/techController";
import sessionMiddleware from '../middleware/session';

const router = Router();
router.get('/', mainController.homepage);
router.get('/projects/all', projectController.getAllProjects);
router.get('/projects/lasts', projectController.getLastProjects);
router.post('/projects/:projectId', projectController.getProject);
// router.get('/projects/:projectId/text', projectController.getProjectText);
router.post('/techs', techController.getAllTechs);
export default router;