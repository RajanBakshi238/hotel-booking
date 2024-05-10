import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVendorDetailDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    vendorName: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    vendorImage: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    vendorEmail: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    vendorAddress: string;

    @ApiProperty()
    @Transform(({value}) => +value)
    @IsNumber()
    noOfTables: number
   
    @ApiProperty()
    @Transform(({value}) => +value)
    @IsNumber()
    seatingCapacity: number

    @ApiProperty()
    @IsString()
    openingHour: string;
    
    @IsString()
    closingHour: string;

    @ApiProperty()
    openingDays: OpeningDayDto

}


export class OpeningDayDto {
    @ApiProperty()
    @IsBoolean()
    Monday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Tuesday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Wednesday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Thursday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Friday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Saturday: boolean;
  
    @ApiProperty()
    @IsBoolean()
    Sunday: boolean;
  }
  