import { Schema, model } from "mongoose";

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  platform: String,
  genre: String,
  releaseDate: Date,
  price: Number,
  stock: {
    type: Number,
    default: 0,
  },
});

export default model('Game', gameSchema);
