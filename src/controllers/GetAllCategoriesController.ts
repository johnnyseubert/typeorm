import { Request, Response } from 'express'
import { GetAllCategoriesService } from '../services/GetAllCategoriesService'

export class GetAllCategoriesController {
	async execute(request: Request, response: Response) {
		const categories = await new GetAllCategoriesService().execute()

		if (categories instanceof Error) {
			return response.status(400).json({ error: categories.message })
		}

		return response.status(200).json(categories)
	}
}
