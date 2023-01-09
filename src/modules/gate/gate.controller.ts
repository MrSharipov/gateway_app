import { Body, Controller, Post } from '@nestjs/common';
import { GateService } from './gate.service';

@Controller('gate')
export class GateController {
  constructor(private readonly gateService: GateService) {}
  @Post()
  getRequest(@Body() body: { city: string }) {
    return this.gateService.get(body.city);
  }
}
