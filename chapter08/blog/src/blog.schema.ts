import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 블로그이면서 도큐먼트인 타입 정의
export type BlogDocument = Blog & Document;

// 스키마임을 나타냄
@Schema()
export class Blog {
  // 스키마의 프로퍼티임을 나타냄
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  name: string;

  @Prop()
  createdDt: Date;

  @Prop()
  updatedDt: Date;
}

// 스키마 생성
export const BlogSchema = SchemaFactory.createForClass(Blog);
