import { HttpService, Injectable, OnModuleInit } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

import { AppConfigService } from "../../configs/configuration.service";


@Injectable()
export class ThingsBoardService implements OnModuleInit {


  constructor(
    private readonly appConfig: AppConfigService,
    private httpService: HttpService
  ) {
  }


  async onModuleInit() {
    await this.getAuthDigest();
  }


  private async getAuthDigest() {

    // const res = await this.httpService.get(`${this.appConfig.thingBoardHost}/api/getNonce`).toPromise();
    // const nonce = res.data["reply"]["nonce"];
    // const realm = res.data["reply"]["realm"];
    //
    // const digest = bcrypt.hashSync("admin" + ":" + realm + ":" + "juganu1234",10)
    //
    // const partial_ha2 = bcrypt.hashSync("GET:",10);
    // //
    // // const simplified_ha2 = md5(digest + ":" + nonce + ":" + partial_ha2);
    // //
    // // console.log(Buffer.from(`admin + ":" + ${nonce} + ":" + ${simplified_ha2}`).toString("base64"));
    // return "";

  }


}
