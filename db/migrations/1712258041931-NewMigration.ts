import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1712258041931 implements MigrationInterface {
    name = 'NewMigration1712258041931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_type_enum" AS ENUM('user', 'admin', 'vendor')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying(30) NOT NULL, "email" character varying(40) NOT NULL, "dialCode" integer NOT NULL, "phoneNumber" integer NOT NULL, "password" character varying NOT NULL, "designation" character varying NOT NULL, "type" "public"."user_type_enum" NOT NULL DEFAULT 'admin', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isVerified" boolean NOT NULL DEFAULT false, "isDeleted" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_type_enum"`);
    }

}
