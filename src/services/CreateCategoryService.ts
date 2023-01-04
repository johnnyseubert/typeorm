import { Category } from "../database/entities/Category"
import { categoryRepository } from "../repositories/CategoryRepository"

export interface CategoryRequest {
   name: string
   description: string
}

export class CreateCategoryService {
   async execute({
      name,
      description,
   }: CategoryRequest): Promise<Category | Error> {
      const category = categoryRepository.create({
         name,
         description,
      })

      //SELECT * FROM TB_CATEGORIAS WHERE NAME = VALOR DA VARIAVEL name
      if (await categoryRepository.findOneBy({ name })) {
         throw new Error("Category already exists")
      }

      const savedCategory = await categoryRepository.save(category)
      return savedCategory
   }
}
