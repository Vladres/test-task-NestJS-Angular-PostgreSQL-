import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';
import { imageFileFilter } from '../utils/upload.utils';
import { ItemController } from './Controllers/item.controller';
import { ItemsService } from './services/items.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Item]),
        MulterModule.register({
            dest: './uploads',
            fileFilter: imageFileFilter,
        })
    ],
  controllers: [ItemController],
  providers: [ItemsService],
})
export class MainModule {}
