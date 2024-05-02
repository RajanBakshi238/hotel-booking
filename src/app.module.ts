import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BusinessEntity } from './modules/business/entities/business.entity';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './modules/auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { BusinessModule } from './modules/business/business.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(
      dataSourceOptions,
      //   {
      //   type: 'postgres',
      //   host: 'localhost',
      //   port: 5432,
      //   password: process.env.DB_PASSWORD,
      //   username: process.env.DB_USERNAME,
      //   database: process.env.DB_NAME,
      //   entities: [User],
      //   // entities: ['dist/**/*.entity.js']
      //   synchronize: true,
      //   logging: true,
      // }
    ),

    // UserModule,
    AuthModule,
    SeedModule,
    BusinessModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
