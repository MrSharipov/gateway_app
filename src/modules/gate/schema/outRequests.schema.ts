import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Out_requests_Document = Out_requests & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Out_requests {
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  request: string;
  @Prop({ required: true })
  response: string;
}

export const OutRequestsSchema = SchemaFactory.createForClass(Out_requests);
