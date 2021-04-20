import { Controller, Get, Inject } from "@nestjs/common";
import { JSOSService } from "../services/jsos.service";

@Controller()
export class JSOSController {

  constructor(private readonly jsosService: JSOSService) {
  }

  @Get('/test')
  async getPr() {
      return 'test'
  }


}
