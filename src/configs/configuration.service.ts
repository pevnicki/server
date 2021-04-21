import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get<string>('app.env');
  }

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }

  get thingBoardHost(): string {
    return this.configService.get<string>('app.thingsBoardHost');
  }

  get corsightHost(): string {
    return this.configService.get<string>('app.corsightHost');
  }

  get corsightLoginPort(): string {
    return this.configService.get<string>('app.corsightLoginPort');
  }

  get corsightPort(): string {
    return this.configService.get<string>('app.corsightPort');
  }

}