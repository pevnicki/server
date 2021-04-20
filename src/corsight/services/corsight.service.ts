import { HttpService, Injectable, OnModuleInit } from "@nestjs/common";
import { EasyconfigService } from "nestjs-easyconfig";
import { AppConfigService } from "../../configs/configuration.service";
import { corsightConst } from "../../shared";
import * as https from "https";



@Injectable()
export class CorsightService implements OnModuleInit {

  token: ''

  constructor(
    private readonly appConfig: AppConfigService,
    private httpService: HttpService
    ) {}

  async onModuleInit() {
      await this.corsightLogin()
  }

  async corsightLogin(): Promise<void>{
    // ${this.appConfig.corsightHost}:${this.appConfig.corsightLoginPort}${corsightConst.loginPath}
    const headersRequest = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    await this.httpService.post<any>(`https://199.203.195.193:15004/auth/login`,
                                     { username: 'superadmin', password: 'SC123456' },{headers:headersRequest}).toPromise().then(res=>{
      console.log(res.data);
    }).catch(err => console.log(err));
  }
}