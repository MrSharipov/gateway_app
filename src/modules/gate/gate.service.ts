import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RpcException } from '@jashkasoft/nestjs-json-rpc';
import { CreateRequestDto } from './dto';
import { In_requests, In_requests_Document } from './schema/inRequests.schema';
import axios from 'axios';
import {
  Out_requests,
  Out_requests_Document,
} from './schema/outRequests.schema';
import { isString } from 'class-validator';

@Injectable()
export class GateService {
  constructor(
    @InjectModel(In_requests.name)
    private readonly inRequestModel: Model<In_requests_Document>,
    @InjectModel(Out_requests.name)
    private readonly outRequestModel: Model<Out_requests_Document>,
  ) {}

  async get(request) {
    if (!isString(request.payload)) {
      return new RpcException('Payload shoul be one of the city names', -32600);
    }
    const res = await this.createResponse(request.payload);
    const data = {
      type: 'in_request',
      request: 'request rpc',
      response: JSON.stringify(res),
    };
    this.saveInputReqRes(data);
    return res;
  }

  async createResponse(cityName) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`,
      );
      console.log(res.data);
      const data = {
        type: 'out_requests',
        request: cityName,
        response: JSON.stringify(res.data),
      };
      this.saveOutputReqRes(data);
      return res.data;
    } catch (err) {
      if (err.response.status === 404) {
        return new RpcException('Data is not found for this city', -32602);
      }
      console.log('Request error for external api');
      throw err;
    }
  }

  async saveInputReqRes(
    inReqRes: CreateRequestDto,
  ): Promise<In_requests_Document> {
    try {
      const request = new this.inRequestModel(inReqRes);
      return request.save();
    } catch (err) {
      console.log('Error while saving data to the DB');
      throw err;
    }
  }

  async saveOutputReqRes(
    OutReqRes: CreateRequestDto,
  ): Promise<Out_requests_Document> {
    try {
      const request = new this.outRequestModel(OutReqRes);
      return request.save();
    } catch (err) {
      console.log('Error while saving data to the DB');
      throw err;
    }
  }
}
