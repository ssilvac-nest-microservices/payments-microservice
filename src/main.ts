import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main-Payments');

  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port);

  logger.log(`Payments microservice is running on PORT: ${envs.port}`);
}
bootstrap();
