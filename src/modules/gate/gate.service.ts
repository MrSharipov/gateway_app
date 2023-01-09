import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from './dto/create-request.dto';
import { Gate, GateDocument } from './schema/gate.schema';

@Injectable()
export class GateService {
  constructor(
    @InjectModel(Gate.name) private readonly requestModel: Model<GateDocument>,
  ) {}
  async create(createMenuDto: CreateRequestDto): Promise<GateDocument> {
    const request = new this.requestModel(createMenuDto);
    return request.save();
  }

  async findAll(): Promise<GateDocument[]> {
    return this.requestModel.find();
  }
}
