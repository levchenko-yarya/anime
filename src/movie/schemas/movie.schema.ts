import * as mongoose from "mongoose";

export const MovieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  url: String
});