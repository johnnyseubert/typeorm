import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Tables } from '../Tables';

export class CreateCategory1672771222971 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: Tables.Categories,
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
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
         })
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(Tables.Categories);
   }
}
