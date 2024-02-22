import Game from '../models/games.model.js';

const gameDAO = {};

gameDAO.getAll = async () => {
  const games = await Game.find();
  return games;
};

gameDAO.getOne = async (title) => {
  const game = await Game.findOne({ title: title });
  return game;
};

gameDAO.updateOne = async (title, game) => {
  return await Game.findOneAndUpdate({ title: title }, game);
};

gameDAO.deleteOne = async (title) => {
  return await Game.findOneAndDelete({ title: title });
};

gameDAO.insertOne = async (game) => {
  return await Game.create(game);
};

export default gameDAO;
