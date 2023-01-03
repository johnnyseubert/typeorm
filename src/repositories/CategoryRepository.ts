import { database } from '../database';
import { Category } from '../database/entities/Category';

export const categoryRepository = database.getRepository(Category);
