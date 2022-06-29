import { Router } from 'express';
import { RequestWithUser } from '../interfaces/RequestWithUser';
import { decodeToken } from '../middlewares/decodeToken';
import { validateNewTask } from '../middlewares/validateNewTask';
import { createTaskController } from '../useCases/createTask';

const taskRouter = Router();

taskRouter.use((req, res, next) => {
  decodeToken(req as RequestWithUser, res, next);
});

taskRouter.post('/', (req, res, next) => {
  validateNewTask(req as RequestWithUser, res, next);
}, (req, res, next) => {
  createTaskController.handle(req as RequestWithUser, res, next);
});

export { taskRouter };