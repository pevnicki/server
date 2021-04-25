import { HttpService, Injectable, OnModuleInit } from '@nestjs/common';
import * as md5 from 'md5';
import btoa from 'btoa';
import { AppConfigService } from '../../configs/configuration.service';

@Injectable()
export class VmsService implements OnModuleInit {
  constructor(
    private readonly appConfig: AppConfigService,
    private readonly httpService: HttpService,
  ) {}

  async onModuleInit() {
    await this.generateAuthDigest();
  }

  getAuthParam = async (): Promise<any> => {
    return await this.httpService
      .get(`${this.appConfig.thingBoardHost}/api/getNonce`)
      .toPromise();
  };

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private generateAuthDigest = async (): Promise<string> => {
    const user = 'admin';
    const password = 'Juganu1234';

    const authParam = await this.getAuthParam();
    const nonce = authParam.data['reply']['nonce'];
    const realm = authParam.data['reply']['realm'];
    const digest = md5(user + ':' + realm + ':' + password);
    const partial_ha2 = md5('GET:');
    const simplified_ha2 = md5(digest + ':' + nonce + ':' + partial_ha2);
    console.log( Buffer.from(user + ':' + nonce + ':' + simplified_ha2).toString('base64'));
    return Buffer.from(user + ':' + nonce + ':' + simplified_ha2).toString('base64');
  };

  // function getAuthDigest(jsonDigest, user, password){
  //   var reply = $.parseJSON(JSON.stringify(jsonDigest['reply']));
  //   var nonce = reply['nonce'];
  //   var realm = reply['realm'];
  //   var digest = md5(user + ":" + realm + ":" + password);
  //   var partial_ha2 = md5("GET:");
  //   var simplified_ha2 = md5(digest + ":" + nonce + ":" + partial_ha2);
  //   return btoa(user + ":" + nonce + ":" + simplified_ha2);
  // }
}
