import { BusinessEntity } from "src/modules/business/entities/business.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class VendorDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => BusinessEntity, business => business.vendors)
    business: BusinessEntity

    @Column({type: 'varchar'})
    vendorName: string
    
    @Column({type: 'varchar'})
    vendorImage: string
    
    @Column({type: 'varchar'})
    vendorEmail: string

    @Column({type: 'varchar'})
    vendorAddress: string

    @Column({type: 'int'})
    noOfTables: number;
    
    @Column({type: 'int'})
    seatingCapacity: number;

    @Column({type: 'varchar'})
    openingHour: string;

    @Column({type: 'varchar'})
    closingHour: string;

    @Column({type: 'int'})
    timeSlotDifference: number

    @Column({type: 'boolean'})
    isOpenSevenDays: boolean    

}
