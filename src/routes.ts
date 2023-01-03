import { Router } from 'express';
import {
   CreateCategoryController,
   createCategoryMiddlewareValidation,
} from './controllers/CreateCategoryController';

export const routes = Router();

routes.post(
   '/categories',
   createCategoryMiddlewareValidation,
   new CreateCategoryController().execute
);
