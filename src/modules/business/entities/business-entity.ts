import { BaseEntity } from "src/shared/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BusinessEntity extends BaseEntity {
    @Column({type: 'varchar'})
    name: string

    @PrimaryGeneratedColumn()
  id: number;
}