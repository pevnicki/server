import { Module } from '@nestjs/common';
import { JSOSController } from './controllers/jsos.controller';
import { JSOSService } from './services/jsos.service';
import { AppConfigModule } from '../configs/configuration.module';

@Module({
  imports: [AppConfigModule],
  controllers: [JSOSController],
  providers: [JSOSService],
})
export class JSOSModule {}
