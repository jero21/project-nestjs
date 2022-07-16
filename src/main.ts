import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Quita/Ignora del req todos los atributos que no estén definidos en un DTO
    forbidNonWhitelisted: true, // Alerta con un error 400 que en el req viene un atributo no definido en un DTO
  }))
  await app.listen(3000);
}
bootstrap();
