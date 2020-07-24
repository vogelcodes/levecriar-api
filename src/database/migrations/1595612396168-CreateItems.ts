import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateItems1595612396168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'category',
            type: 'timestamp',
          },
          {
            name: 'qty',
            type: 'integer',
          },
          {
            name: 'trsId',
            type: 'varchar',
          },
          {
            name: 'list',
            type: 'json',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items');
  }
}
