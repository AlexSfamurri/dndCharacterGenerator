const db = require('./dbConnection');

module.exports = {

  getCharacterDataByName : ( name ) => db.any(`
    SELECT * FROM characters
    WHERE name = $1
    `, [name])
  .then(([ character ]) => character)
  .catch((err) => {
    console.error(err);
  }),

  getAttributesById : (id) => db.any(`
    SELECT * FROM attributes
    WHERE id = $1
  `, [id])
  .then(([ attributes ]) => attributes)
  .catch(err => {
    console.error(err);
  }),

  getClassById : (id) => db.any(`
    SELECT * FROM classes
    WHERE id = $1
  `, [id])
  .then(([characterClass]) => characterClass)
  .catch(err => {
    console.error(err);
  }),

  getClassByName: (name) => db.any(`
    SELECT * FROM classes
    WHERE name = $1
  `, [name])
  .then(([characterClass]) => characterClass)
  .catch(err => {
    console.error(err);
  }),

  getRaceById : (id) => db.any(`
    SELECT * FROM races
    WHERE id = $1
  `, [id])
  .then(([race]) => race)
  .catch(err => {
    console.error(err);
  }),

  getRaceByName : (name) => db.any(`
    SELECT * FROM races
    WHERE name = $1
  `, [name])
  .then(([race]) => race)
  .catch(err => {
    console.error(err);
  }),

  getProficiencyBonusById : (id) => db.any(`
    SELECT bonus FROM proficiency_bonuses
    WHERE id = $1
  `, [id])
  .then(([ { bonus } ]) => bonus)
  .catch(err => {
    console.error(err);
  }),

  getBackgroundById : (id) => db.any(`
    SELECT * FROM backgrounds
    WHERE id = $1
  `, [id])
  .then(([ background ]) => background)
  .catch(err => {
    console.error(err);
  }),

  getBackgroundByName: (name) => db.any(`
    SELECT * FROM backgrounds
    WHERE name = $1
  `, [name])
  .then(([background]) => background)
  .catch(err => {
    console.error(err);
  }),

  getSubClassById : (id) => db.any(`
    SELECT * FROM sub_class
    WHERE id = $1
  `, [id])
  .then(([ subClass ]) => subClass)
  .catch(err => {
    console.error(err);
  }),

  getSubClassByClassId: (classId) => db.any(`
    SELECT * FROM sub_class
    WHERE class_id = $1
  `, [classId])
    .then(([subClass]) => subClass )
    .catch(err => {
      console.error(err);
    }),
  
  getSubClassByName: (name) => db.any(`
    SELECT * FROM sub_class
    WHERE name = $1
  `, [name])
  .then(([subClass]) => subClass)
  .catch(err => {
    console.error(err);
  }),

  
  





};