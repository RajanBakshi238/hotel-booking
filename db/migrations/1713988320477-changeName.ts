import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeName1713988320477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "full_name" TO "fullName"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
