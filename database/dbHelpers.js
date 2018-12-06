const db = require('./dbConnection');

module.exports = {

  getCharacterDataByName : ( name ) => db.any(`
    SELECT * FROM characters
    WHERE name = $1
    `, [name])
  .then(([ character ])=>{
    return character;
  })
  .catch((err)=>{
    console.error(err);
  }),

};