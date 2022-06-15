import { Router } from "express";
import mainController from "../controllers/mainController";

const router = Router();
router.get('/', mainController.homepage);
router.get('/projects', mainController.projects);
// router.get('/404', mainController[404]);
export default router;