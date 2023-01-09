import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from './dto';
import { In_requests, In_requests_Document } from './schema/inRequests.schema';
import axios from 'axios';
import {
  Out_requests,
  Out_requests_Document,
} from './schema/outRequests.schema';

@Injectable()
export class GateService {
  constructor(
    @InjectModel(In_requests.name)
    private readonly inRequestModel: Model<In_requests_Document>,
    @InjectModel(Out_requests.name)
    private readonly outRequestModel: Model<Out_requests_Document>,
  ) {}

  async get(cityName: string) {
    const res = await this.createResponse(cityName);
    const data = {
      type: 'in_request',
      request: cityName,
      response: JSON.stringify(res.data),
    };
    this.saveInputReqRes(data);
    return res.data;
  }

  async createResponse(cityName) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=174ca642f1ca181b047e9a7d8a8e43ba`,
    );
    const data = {
      type: 'out_requests',
      request: cityName,
      response: JSON.stringify(res.data),
    };
    this.saveOutputReqRes(data);
    return res;
  }

  async saveInputReqRes(
    inReqRes: CreateRequestDto,
  ): Promise<In_requests_Document> {
    const request = new this.inRequestModel(inReqRes);
    return request.save();
  }

  async saveOutputReqRes(
    OutReqRes: CreateRequestDto,
  ): Promise<Out_requests_Document> {
    const request = new this.outRequestModel(OutReqRes);
    return request.save();
  }
}
