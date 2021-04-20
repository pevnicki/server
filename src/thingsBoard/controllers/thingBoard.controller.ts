import { Controller, Get, Inject } from "@nestjs/common";
import { ThingsBoardService } from "../services/thingsBoard.service";


@Controller()
export class ThingBoardController {

  constructor(private readonly thingsBordService: ThingsBoardService) {
  }

  @Get('/test')
  async getPr() {
    return 'test'
  }


}
