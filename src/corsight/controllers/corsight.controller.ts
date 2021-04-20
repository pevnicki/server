import { Controller, Get, Inject } from "@nestjs/common";



@Controller()
export class CorsightController {

  constructor() {
  }

  @Get('/test')
  async getPr() {
    return 'test'
  }


}