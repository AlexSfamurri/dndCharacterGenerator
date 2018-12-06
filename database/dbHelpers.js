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

  getAttributesById : (id) => db.any(`
    SELECT * FROM attributes
    WHERE id = $1
  `, [id])
  .then(([ attributes ]) =>{
    return attributes;
  })
  .catch(err=>{
    console.error(err);
  }),

  getClassById : (id) => db.any(`
    SELECT * FROM classes
    WHERE id = $1
  `, [id])
  .then(([characterClass]) =>{
    return characterClass;
  })
  .catch(err=>{
    console.error(err);
  }),

  getRaceById : (id) => db.any(`
    SELECT * FROM races
    WHERE id = $1
  `, [id])
  .then(([race])=>{
    return race;
  })
  .catch(err=>{
    console.error(err);
  }),

  getProficiencyBonusById : (id) => db.any(`
    SELECT bonus FROM proficiency_bonuses
    WHERE id = $1
  `, [id])
  .then(([ { bonus } ])=>{
    return bonus;
  })
  .catch(err=>{
    console.error(err);
  }),




};