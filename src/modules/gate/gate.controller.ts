import { Body, Controller, Post } from '@nestjs/common';
import { InRequestDto } from './dto';
import { GateService } from './gate.service';

@Controller('gate')
export class GateController {
  constructor(private readonly gateService: GateService) {}
  @Post()
  getRequest(@Body() body: InRequestDto) {
    return this.gateService.get(body.city);
  }
}
