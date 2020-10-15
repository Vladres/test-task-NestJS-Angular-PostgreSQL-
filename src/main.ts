import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';



async function bootstrap() {

    const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
    app.use('/uploads/', express.static('./uploads'));
    await app.listen(3000);
}
bootstrap();
