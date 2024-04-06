import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1712431360400 implements MigrationInterface {
    name = 'NewMigration1712431360400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" integer NOT NULL`);
    }

}
