import { Injectable, OnModuleInit } from "@nestjs/common";
import { EasyconfigService } from "nestjs-easyconfig";

@Injectable()
export class EasyConfiguration implements OnModuleInit {

  constructor(private easyConfigService: EasyconfigService) {}

  onModuleInit() {
    return this.easyConfigService.get('envConfig');
  }
}