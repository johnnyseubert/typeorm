import { Category } from '../database/entities/Category'
import { categoryRepository } from '../repositories/CategoryRepository'

export class GetAllCategoriesService {
   async execute(): Promise<Category[] | Error> {
      const categories = await categoryRepository.find()

      if (categories.length === 0) {
         return new Error('Sem categories Encontradas')
      }

      return categories
   }
}
