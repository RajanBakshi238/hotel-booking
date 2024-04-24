import { BaseEntity } from 'src/shared/entities/base.entity';
import { RolesEnum } from 'src/shared/types/RolesEnum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'varchar', length: 30, nullable: true })
  fullName: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'int' })
  dialCode: number;

  @Column({ type: 'bigint' })
  phoneNumber: number;

  @Column({ type: 'varchar', length: 40, nullable: true })
  completePhoneNumber: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['male', 'female', 'unspecified'], nullable: true })
  gender: string;

  @Column({ type: 'varchar'})
  designation: string;

  @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.ADMIN })
  type: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

}
