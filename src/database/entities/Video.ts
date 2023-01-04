import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm'
import { Tables } from '../Tables'
import { v4 as uuid } from 'uuid'
import { Category } from './Category'

@Entity(Tables.Videos)
export class Video {
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

	@Column()
	duration: number

	@Column()
	category_id: string

	@CreateDateColumn()
	created_at: Date

	//=================RELACIONAMENTOS=================

	//DICA sempre ler de cima para baixo, tem MUITOS videos para uma categoria
	@ManyToOne(() => Category)
	@JoinColumn({ name: 'category_id' })
	category: Category
}
