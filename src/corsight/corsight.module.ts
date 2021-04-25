import { HttpModule, Module } from '@nestjs/common';
import { AppConfigModule } from '../configs/configuration.module';
import { CorsightController } from './controllers/corsight.controller';
import { CorsightService } from './services/corsight.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [AppConfigModule, HttpModule],
  controllers: [CorsightController],
  providers: [CorsightService],
})
export class CorsightModule {}
