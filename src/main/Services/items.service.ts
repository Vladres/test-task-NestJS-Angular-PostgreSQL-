import { Injectable } from '@nestjs/common';
import { Item } from '../../model/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }

    //Get all items
    findAll(): Promise<Item[]> {
        try {
            return this.itemsRepository.find();
        } catch (e) {
            return e.messege();
        }
    }

    //Get item by :id
    findById(id: string): Promise<Item> {
        try {
            return this.itemsRepository.findOne({ id });
        } catch (e) {
            return e.messege();
        }
    }

    //Get item by :id
    async findImagePathId(id: string): Promise<string> {
        try {
            const image = await this.itemsRepository.findOne({ id });
            return image.image;
        } catch (e) {
            return e.messege();
        }

    }

    //Add item 
    async addItem(photo: any): Promise<any> {
        try {
            const data = await this.itemsRepository.create({ ...photo })
            return await this.itemsRepository.save(data);
        } catch (e) {
            return e.messege();
        }
    }

}
