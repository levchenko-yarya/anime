import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  icon: string;

  @Prop()
  categoryDe: string;

  @Prop()
  categoryEn: string;

  @Prop()
  categoryLink: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  subCategories: Category[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);