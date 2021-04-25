import { Injectable, OnModuleInit } from '@nestjs/common';
import { AppConfigService } from '../../configs/configuration.service';

@Injectable()
export class JSOSService implements OnModuleInit {
  constructor(private readonly appConfig: AppConfigService) {}

  onModuleInit() {}
}
