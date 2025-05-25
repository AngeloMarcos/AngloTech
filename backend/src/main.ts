import { NestFactory } from '@nestjs/core';
import { AppModule }  from './app.module';
import * as dotenv     from 'dotenv';  // garante carregamento das variáveis

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(parseInt(process.env.PORT || '3001', 10));
}
bootstrap();
