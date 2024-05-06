import { BusinessEntity } from 'src/modules/business/entities/business.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OpeningDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  Monday: boolean;

  @Column({ default: false })
  Tuesday: boolean;

  @Column({ default: false })
  Wednesday: boolean;

  @Column({ default: false })
  Thursday: boolean;

  @Column({ default: false })
  Friday: boolean;

  @Column({ default: false })
  Saturday: boolean;

  @Column({ default: false })
  Sunday: boolean;
}

@Entity()
export class VendorDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BusinessEntity, (business) => business.vendors)
  business: BusinessEntity;

  @Column({ type: 'varchar' })
  vendorName: string;

  @Column({ type: 'varchar' })
  vendorImage: string;

  @Column({ type: 'varchar' })
  vendorEmail: string;

  @Column({ type: 'varchar' })
  vendorAddress: string;

  @Column({ type: 'int' })
  noOfTables: number;

  @Column({ type: 'int' })
  seatingCapacity: number;

  @Column({ type: 'varchar' })
  openingHour: string;

  @Column({ type: 'varchar' })
  closingHour: string;

  @Column({ type: 'int' })
  timeSlotDifference: number;

  @Column({ type: 'boolean' })
  isOpenSevenDays: boolean;

  @OneToOne(() => OpeningDay, { cascade: true })
  @JoinColumn()
  openingDays: OpeningDay;

  @OneToOne(() => User, (user) => user.vendorDetail)
  user: User;
}
