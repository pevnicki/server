import { Controller, Delete, Get, Inject, Options, Param } from "@nestjs/common";
import { CorsightService } from "../services/corsight.service";
import { DeleteResult } from "typeorm";



@Controller('/poi')
export class CorsightController {



  constructor(private corsightService: CorsightService) {
  }

  @Get()
  async getPoi(): Promise<any> {
    return await this.corsightService.getPOIS()
  }

  @Delete('/:poi_id')
  async deletePoi(@Param('poi_id') poi_id:string): Promise<any>{
    return await this.corsightService.deletePOI(poi_id)
  }







}