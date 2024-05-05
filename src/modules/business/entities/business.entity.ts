import { VendorDetail } from 'src/modules/vendor-details/entities/vendor-detail.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BusinessEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => VendorDetail, (vendor) => vendor.business)
  vendors: VendorDetail[];

  @PrimaryGeneratedColumn()
  id: number;
}
