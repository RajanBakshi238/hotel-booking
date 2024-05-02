import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1714680687878 implements MigrationInterface {
    name = 'NewMigration1714680687878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "business_entity" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isDeleted" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "id" SERIAL NOT NULL, CONSTRAINT "PK_611b70452c113fb6e68942bef03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "business_entity"`);
    }

}
