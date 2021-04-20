import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from "./swaggerConfig";
import { EasyConfiguration } from "./configs/easyconfig.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  new SwaggerConfig(app).create()

  const configService : EasyConfiguration = app.get('EasyconfigService');
  let objConfig = configService["envConfig"]


  await app.listen(objConfig.PORT);
}
bootstrap();
