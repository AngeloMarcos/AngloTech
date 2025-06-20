// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule }   from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
  // habilitar CORS a partir da origem configurada
  app.enableCors({ origin: allowedOrigin, credentials: true });

  await app.listen(3001);
}
bootstrap();
