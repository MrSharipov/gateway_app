import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GateDocument = Gate & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Gate {
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  text: string;
}

export const GateSchema = SchemaFactory.createForClass(Gate);
