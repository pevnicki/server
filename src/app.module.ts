import { Module } from "@nestjs/common";

import { JSOSModule } from "./jsos/jsos.module";
import { EasyconfigModule } from "nestjs-easyconfig";
import { ThingBoardModule } from "./thingsBoard/thingBoard.module";
import { CorsightModule } from "./corsight/corsight.module";
require('dotenv').config();

@Module({
  imports: [
    JSOSModule,
    ThingBoardModule,
    CorsightModule,
    EasyconfigModule.register({path: `environment/.env.${process.env.NODE_ENV}`, safe: true})
  ]
})
export class AppModule {}
