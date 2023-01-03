import { NextFunction, Request, Response } from 'express';
import {
   CategoryRequest,
   CreateCategoryService,
} from '../services/CreateCategoryService';

export class CreateCategoryController {
   async execute(
      request: Request<{}, {}, CategoryRequest>,
      response: Response
   ) {
      const { name, description } = request.body;

      const service = new CreateCategoryService();

      const result = await service.execute({ name, description });

      if (result instanceof Error) {
         return response.status(400).json({ error: result.message });
      }

      return response.status(201).json(result);
   }
}

export const createCategoryMiddlewareValidation = (
   request: Request<{}, {}, CategoryRequest>,
   response: Response,
   next: NextFunction
) => {
   const { name, description } = request.body;

   if (!name || !description) {
      return response
         .status(400)
         .json({ error: 'name and description must have values' });
   }
   next();
};
