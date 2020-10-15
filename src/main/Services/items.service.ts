import { Injectable, BadRequestException } from '@nestjs/common';
import { Item } from '../../model/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { getConnection } from 'typeorm';

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
            let image = await this.itemsRepository.findOne({ id });
            if (image)
                return image.image;
            else
                throw new BadRequestException("das");
        } catch (e) {
            return e.messege();
        }

    }

    //EditAll
    async editAllItems(editItems: Item[]): Promise<Item[]> {
        try {

            await getConnection()
                .createQueryBuilder()
                .delete()
                .from(Item)
                .execute();

            let data =  await this.itemsRepository.create(editItems);

            return await this.itemsRepository.save(data);

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
