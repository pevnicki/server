import { HttpModule, Module } from '@nestjs/common';
import { AppConfigModule } from '../configs/configuration.module';
import { VmsService } from './services/vms.service';
import { VmsController } from './controllers/vms.controller';

@Module({
  imports: [AppConfigModule, HttpModule],
  controllers: [VmsController],
  providers: [VmsService],
})
export class VmsModule {}
