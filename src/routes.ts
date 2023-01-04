import { Router } from 'express';
import {
   CreateCategoryController,
   createCategoryMiddlewareValidation,
} from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';

export const routes = Router();

routes.get('/categories', new GetAllCategoriesController().execute);

routes.post(
   '/categories',
   createCategoryMiddlewareValidation,
   new CreateCategoryController().execute
);
