import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Tables } from '../Tables';

export class CreateVideos1672772471627 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: Tables.Videos,
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
               },
               {
                  name: 'name',
                  type: 'varchar',
                  isUnique: true,
               },
               {
                  name: 'description',
                  type: 'varchar',
               },
               {
                  name: 'category_id',
                  type: 'uuid',
               },
               {
                  name: 'duration',
                  type: 'numeric',
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
            foreignKeys: [
               {
                  name: 'fk_category_video',
                  columnNames: ['category_id'],
                  referencedTableName: Tables.Categories,
                  referencedColumnNames: ['id'],
               },
            ],
         })
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(Tables.Videos);
   }
}
