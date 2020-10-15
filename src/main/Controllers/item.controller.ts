import { Controller, Get, Param, Post, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Item } from '../../model/item.entity';
import { ItemsService } from '../services/items.service';
import { filenameFilter } from '../../utils/upload.utils';


@Controller('items')
export class ItemController {

    constructor(private readonly _itemService: ItemsService) {}

    //Get all
    @Get()
    getAllItems(): Promise<Item[]> {
        return this._itemService.findAll();
    }

    //Get by id
    @Get(':id')
    getItemById(@Param() params): Promise<Item> {
        return this._itemService.findById(params.id);
    }

    //Save photo and send to add 
    @Post()
    @UseInterceptors(FilesInterceptor('image', 1, filenameFilter))
    async uploadPhotos(@UploadedFiles() file) {
        if (file) {
            let photo = {
                name: file[0].originalname,
                image: file[0].path,
            }
            const item = await this._itemService.addItem(photo);
            return item;
        }
    }

    //Download photo by item id
    @Get('/img/:imgpath')
    async viewPhoto(@Param('imgpath') imagepath, @Res() res) {
        return res.send(imagepath, { root: '.' });
    }

    //Download photo by item id
    @Get('/img/:imgid')
    async downloadFile(@Param('imgid') imageId, @Res() res){
        const path = await this._itemService.findImagePathId(imageId);
        return res.sendFile(path, { root: '.' });
    }
}
