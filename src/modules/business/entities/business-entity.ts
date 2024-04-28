import { BaseEntity } from "src/shared/entities/base.entity";
import { Column } from "typeorm";

export class BusinessEntity extends BaseEntity {
    @Column({type: 'varchar'})
    name: string
}