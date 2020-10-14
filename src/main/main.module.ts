import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Item]),
    ],
  controllers: [],
  providers: [],
})
export class MainModule {}
