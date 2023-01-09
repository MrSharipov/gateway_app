import { Body, Controller, Post } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { GateService } from './gate.service';

@Controller('gate')
export class GateController {
  constructor(private readonly gateService: GateService) {}
  @Post()
  getRequest(@Body() body: { city: string }) {
    return this.gateService.get(body.city);
  }
}
