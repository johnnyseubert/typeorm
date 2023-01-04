import { database } from '../database'
import { Category } from '../database/entities/Category'
import { Tables } from '../database/Tables'
import { categoryRepository } from '../repositories/CategoryRepository'
import { v4 as uuid } from 'uuid'

export interface CategoryRequest {
	name: string
	description: string
}

export class CreateCategoryService {
	async execute({
		name,
		description,
	}: CategoryRequest): Promise<Category | Error> {
		//SELECT * FROM TB_CATEGORIAS WHERE NAME = VALOR DA VARIAVEL name
		if (await categoryRepository.findOneBy({ name })) {
			throw new Error('Category already exists')
		}

		const savedCategory = await database
			.createQueryBuilder()
			.insert()
			.into(Tables.Categories)
			.values({ id: uuid(), name, description })
			.returning('*')
			.execute()

		console.log(savedCategory.raw[0].id + '   IIDDDDD')

		const category: Category = {
			id: savedCategory.raw[0].id,
			name: savedCategory.raw[0].name,
			description: savedCategory.raw[0].description,
			created_at: savedCategory.raw[0].created_at,
		}

		return category
	}
}
