import {Document} from 'mongoose'

export interface Category extends Document {
  icon: string;
  categoryDe: string;
  categoryEn: string;
  categoryLink: string;
}