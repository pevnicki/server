import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export class  SwaggerConfig {

  app: INestApplication;
  constructor(app: INestApplication) {
   this.app = app;
  }

  create(){
    const config = new DocumentBuilder()
      .setTitle('Jugano proxy ')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('api', this.app, document);

  }

}