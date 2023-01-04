import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { Tables } from '../Tables'
import { v4 as uuid } from 'uuid'

@Entity(Tables.Categories)
export class Category {
	constructor() {
		if (!this.id) {
			this.id = uuid()
		}
	}

	@PrimaryColumn()
	id: string

	@Column()
	name: string

	@Column()
	description: string

	@CreateDateColumn()
	created_at: Date
}
