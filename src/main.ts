import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  const config = app.get(ConfigService);
  const PORT = config.get("PORT");
  const HOST = config.get("HOST");
  await app.listen(3000, () => {
    console.log("Server has been connected on " + HOST + PORT);
  });
}
bootstrap();
