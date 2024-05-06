import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1715028289598 implements MigrationInterface {
    name = 'NewMigration1715028289598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "opening_day" ("id" SERIAL NOT NULL, "Monday" boolean NOT NULL DEFAULT false, "Tuesday" boolean NOT NULL DEFAULT false, "Wednesday" boolean NOT NULL DEFAULT false, "Thursday" boolean NOT NULL DEFAULT false, "Friday" boolean NOT NULL DEFAULT false, "Saturday" boolean NOT NULL DEFAULT false, "Sunday" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_f2a2271fd97bdcb95e9d083fa52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendor_detail" ("id" SERIAL NOT NULL, "vendorName" character varying NOT NULL, "vendorImage" character varying NOT NULL, "vendorEmail" character varying NOT NULL, "vendorAddress" character varying NOT NULL, "noOfTables" integer NOT NULL, "seatingCapacity" integer NOT NULL, "openingHour" character varying NOT NULL, "closingHour" character varying NOT NULL, "timeSlotDifference" integer NOT NULL, "isOpenSevenDays" boolean NOT NULL, "businessId" integer, "openingDaysId" integer, CONSTRAINT "REL_c1e844b7611fec8bba09ec078b" UNIQUE ("openingDaysId"), CONSTRAINT "PK_36ffd02ca5c14ab6c06469b7c99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "vendorDetailId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_4e62b39f38f3458171b9b8bcf8a" UNIQUE ("vendorDetailId")`);
        await queryRunner.query(`ALTER TABLE "vendor_detail" ADD CONSTRAINT "FK_bc9e2d1ceda15eb290334aebfb4" FOREIGN KEY ("businessId") REFERENCES "business_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_detail" ADD CONSTRAINT "FK_c1e844b7611fec8bba09ec078b8" FOREIGN KEY ("openingDaysId") REFERENCES "opening_day"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4e62b39f38f3458171b9b8bcf8a" FOREIGN KEY ("vendorDetailId") REFERENCES "vendor_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4e62b39f38f3458171b9b8bcf8a"`);
        await queryRunner.query(`ALTER TABLE "vendor_detail" DROP CONSTRAINT "FK_c1e844b7611fec8bba09ec078b8"`);
        await queryRunner.query(`ALTER TABLE "vendor_detail" DROP CONSTRAINT "FK_bc9e2d1ceda15eb290334aebfb4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_4e62b39f38f3458171b9b8bcf8a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "vendorDetailId"`);
        await queryRunner.query(`DROP TABLE "vendor_detail"`);
        await queryRunner.query(`DROP TABLE "opening_day"`);
    }

}
