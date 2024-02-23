import { Schema, model } from "mongoose";

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  platform: String,
  genre: String,
  releaseDate: String,
  price: Number,
  stock: {
    type: Number,
    default: 0,
  }
},{
  //para omitir el versionamiento de objetos 
  versionKey:false,
  timestamps:true
});

export default model('Game', gameSchema);
