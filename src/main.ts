import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(function (req: Request, res: Response, next: NextFunction) {
  //   console.log('before', req.url);
  //   next();
  //   console.log('after');
  // });
  await app.listen(3000);
}
bootstrap();
