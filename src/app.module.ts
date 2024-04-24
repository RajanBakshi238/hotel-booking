import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './modules/auth/auth.module';

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

    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
