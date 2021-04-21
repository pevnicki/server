import { HttpService, Injectable, OnModuleInit } from "@nestjs/common";
import { AppConfigService } from "../../configs/configuration.service";
import { corsightConst } from "../../shared";
import * as https from "https";
import * as qs from "qs";


@Injectable()
export class CorsightService {

  private token = "";
  private expires_time = "";

  constructor(
    private readonly appConfig: AppConfigService,
    private httpService: HttpService
  ) {}


  private getToken = async () => {

    const options = { rejectUnauthorized: false };
    const httpsAgent = new https.Agent(options);

    const body = qs.stringify({
      "username": "superadmin",
      "password": "SC123456"
    });

    let headersRequest = { "Content-Type": "application/x-www-form-urlencoded" };
    try {
      const res = await this.httpService.post(
        `${this.appConfig.corsightHost}:${this.appConfig.corsightLoginPort}${corsightConst.loginPath}`,
        body,
        { headers: headersRequest, httpsAgent })
        .toPromise();

      this.token = res.data.access_token;
      this.expires_time = res.data.expires_in;

    } catch (err) {
      console.log(err);
    }

  };


  getPOIS = async () => {
    await this.getToken();
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    let headersRequest = { "Authorization": `Bearer ${this.token}` };
    try {
      const res = await this.httpService.get(
        `${this.appConfig.corsightHost}:${this.appConfig.corsightPort}${corsightConst.getPOI}`,
        { headers: headersRequest, httpsAgent })
        .toPromise();
      return res.data;
    } catch (err) {
      console.log(err);
    }

  };

  deletePOI = async (id: string) => {
    // const options = { rejectUnauthorized: false };
    // const httpsAgent = new https.Agent(options);
    //
    // const body = qs.stringify({
    //   "username": "superadmin",
    //   "password": "SC123456"
    // });
    //
    // let headersRequest = { "Content-Type": "application/x-www-form-urlencoded" };
    // try {
    //   const res = await this.httpService.post(
    //     `${this.appConfig.corsightHost}:${this.appConfig.corsightLoginPort}${corsightConst.removePoi}`,
    //     body,
    //     { headers: headersRequest, httpsAgent })
    //     .toPromise();
    //
    //   this.token = res.data.access_token;
    //   this.expires_time = res.data.expires_in;
    //
    // } catch (err) {
    //   console.log(err);
    // }
  };


}