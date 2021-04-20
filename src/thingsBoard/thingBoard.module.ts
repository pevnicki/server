import { HttpModule, Module } from "@nestjs/common";
import { AppConfigModule } from "../configs/configuration.module";
import { ThingsBoardService } from "./services/thingsBoard.service";
import { ThingBoardController } from "./controllers/thingBoard.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    AppConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        baseURL: config.get('THINGS_BOARD_HOST')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [ThingBoardController],
  providers: [ThingsBoardService],
})
export class ThingBoardModule {}
