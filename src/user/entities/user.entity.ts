import { RolesEnum } from 'src/shared/types/RolesEnum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
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

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
