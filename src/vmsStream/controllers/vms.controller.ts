import { Controller } from '@nestjs/common';
import { VmsService } from '../services/vms.service';

@Controller('/vms')
export class VmsController {
  constructor(private vmsService: VmsService) {}
}
