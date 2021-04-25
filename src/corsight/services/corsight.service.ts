import { HttpService, Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from '../../configs/configuration.service';
import { corsightConst } from '../../shared';
import * as https from 'https';
import * as qs from 'qs';

@Injectable()
export class CorsightService {
  private token = '';
  private expires_time = '';
  private errorCode = '';
  private errorMsg = '';

  constructor(
    private readonly appConfig: AppConfigService,
    private httpService: HttpService,
  ) {}

  private getToken = async () => {
    const options = { rejectUnauthorized: false };
    const httpsAgent = new https.Agent(options);

    const body = qs.stringify({
      username: 'superadmin', //
      password: 'SC123456', //
    });

    const headersRequest = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      const res = await this.httpService
        .post(
          `${this.appConfig.corsightHost}:${this.appConfig.corsightLoginPort}${corsightConst.loginPath}`,
          body,
          { headers: headersRequest, httpsAgent },
        )
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
    const headersRequest = { Authorization: `Bearer ${this.token}` };
    try {
      const res = await this.httpService
        .get(
          `${this.appConfig.corsightHost}:${this.appConfig.corsightPort}${corsightConst.getPOI}`,
          { headers: headersRequest, httpsAgent },
        )
        .toPromise();
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  deletePOI = async (id: string) => {
    await this.getToken();
    const body = JSON.stringify({
      pois: [{ poi_id: id }],
    });

    const options = { rejectUnauthorized: false };
    const httpsAgent = new https.Agent(options);

    const headersRequest = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    try {
      const res = await this.httpService
        .post(
          `${this.appConfig.corsightHost}:${this.appConfig.corsightPort}${corsightConst.removePoi}`,
          body,
          { headers: headersRequest, httpsAgent },
        )
        .toPromise();

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  createPoi = async () => {};
}
