import gameDAO from "../dao/games.dao.js";

export const getAll = (req, res) => {
  gameDAO.getAll()
    .then(games => res.render('../src/views/index', { games }))  // Renderiza la vista 'index.ejs' con los datos
    .catch(err => res.status(500).send('Server unavailable'));
};

export const getOne = (req, res) => {
  gameDAO.getOne(req.params.title)
    .then(game => {
      !game ? res.status(404).send('Game not found') : res.render('../src/views/detail', { game });  // Renderiza la vista 'detail.ejs' con los datos
    })
    .catch(err => res.status(500).send('Server unavailable'));
};

export const insertOne = (req, res) => {
  const game = req.body;
  gameDAO.insertOne(game)
    .then(result => res.redirect('/eneba/games'))  // Redirige a la pantalla principal
    .catch(err => res.status(500).send('Server unavailable'));
};


export const deleteOne = (req, res) => {
  gameDAO.deleteOne(req.params.title)
    .then(result => res.redirect('/eneba/games'))  // Redirige a la página principal (ajusta la ruta según tu estructura)
    .catch(err => res.status(500).send('Server unavailable'));
};



export const updateOne=(req,res)=>{
  console.log(req.body)
  gameDAO.updateOne(req.params.title, req.body)
  .then(result=>res.redirect('/eneba/games'))
  .catch(err=>res.json({status: "Server unavaliable =/"}));
}