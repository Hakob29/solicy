import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api");
  const config = new DocumentBuilder()
    .setTitle('Solicy')
    .setDescription('API Description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  const PORT = configService.get("PORT");
  const HOST = configService.get("HOST");
  await app.listen(3000, () => {
    console.log("Server has been connected on " + HOST + PORT);
  });
}
bootstrap();
