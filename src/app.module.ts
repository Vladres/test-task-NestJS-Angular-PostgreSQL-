import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { MainModule } from './main/main.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        MainModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
