import { Document } from "mongoose";

export interface Movie extends Document {
  readonly name: string;
  readonly series: number;
  readonly episodes: number; 
}

// export interface Movie extends Document {
//   readonly name: string;
//   readonly genre: string;
//   readonly url: string;
// }