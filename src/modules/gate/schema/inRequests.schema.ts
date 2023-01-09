import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type In_requests_Document = In_requests & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class In_requests {
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  text: string;
}

export const InRequestsSchema = SchemaFactory.createForClass(In_requests);
