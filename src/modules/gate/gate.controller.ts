import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { GateService } from './gate.service';

@Controller('gate')
export class GateController {
  constructor(private readonly gateService: GateService) {}
  @Post()
  create(@Body() request: CreateRequestDto) {
    return this.gateService.create(request);
  }
  @Get()
  findAll() {
    return this.gateService.findAll();
  }
  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.gateService.findOne(id);
  //   }
  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() updateMenuDto: UpdateRequestDto) {
  //     return this.gateService.update(id, updateMenuDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.gateService.remove(+id);
  // }
}
