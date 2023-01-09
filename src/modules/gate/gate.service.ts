import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from './dto/create-request.dto';
import { In_requests, In_requests_Document } from './schema/inRequests.schema';

@Injectable()
export class GateService {
  constructor(
    @InjectModel(In_requests.name)
    private readonly requestModel: Model<In_requests_Document>,
  ) {}
  async create(inRequest: CreateRequestDto): Promise<In_requests_Document> {
    const request = new this.requestModel(inRequest);
    return request.save();
  }
}
