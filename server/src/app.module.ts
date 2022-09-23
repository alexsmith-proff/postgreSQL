import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { config } from 'rxjs';
// import { config } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '../.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], 
      inject: [ConfigService],
      // useFactory: async (config: ConfigService) => ({
      //   type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
      //   username: config.get<string>('TYPEORM_USERNAME'),
      //   password: config.get<string>('TYPEORM_PASSWORD'),
      //   database: config.get<string>('TYPEORM_DATABASE'),
      //   port: config.get<number>('TYPEORM_PORT'),
      //   entities: [__dirname + 'dist/**/*.entity{.te, .js'],
      //   synchronize: true,
      //   logging: true
      // })

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        // entities: [__dirname + 'dist/**/*.entity{.te, .js'],
        synchronize: true,
      }),


    })
    // TypeOrmModule.forRoot({
    //   type: 'postgres', 
    //   // host: 'http://localhost',
    //   port: 5432,
    //   username: 'admin',
    //   password: 'admin',
    //   database: 'mybase',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   entities: [__dirname + 'dist/**/*.entity{.te, .js'],
    //   // logging: true,
    // }),
    // UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
