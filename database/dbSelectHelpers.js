const db = require('./dbConnection');

module.exports = {

  characterDataByName : ( name ) => db.any(`
    SELECT * FROM characters
    WHERE name = $1
    `, [name])
  .then(([ character ]) => character)
  .catch((err) => {
    console.error(err);
  }),

  attributesById : (id) => db.any(`
    SELECT * FROM attributes
    WHERE id = $1
  `, [id])
  .then(([ attributes ]) => attributes)
  .catch(err => {
    console.error(err);
  }),

  classById : (id) => db.any(`
    SELECT * FROM classes
    WHERE id = $1
  `, [id])
  .then(([characterClass]) => characterClass)
  .catch(err => {
    console.error(err);
  }),

  classByName: (name) => db.any(`
    SELECT * FROM classes
    WHERE name = $1
  `, [name])
  .then(([characterClass]) => characterClass)
  .catch(err => {
    console.error(err);
  }),

  raceById : (id) => db.any(`
    SELECT * FROM races
    WHERE id = $1
  `, [id])
  .then(([race]) => race)
  .catch(err => {
    console.error(err);
  }),

  raceByName : (name) => db.any(`
    SELECT * FROM races
    WHERE name = $1
  `, [name])
  .then(([race]) => race)
  .catch(err => {
    console.error(err);
  }),

  proficiencyBonusById : (id) => db.any(`
    SELECT bonus FROM proficiency_bonuses
    WHERE id = $1
  `, [id])
  .then(([ { bonus } ]) => bonus)
  .catch(err => {
    console.error(err);
  }),

  backgroundById : (id) => db.any(`
    SELECT * FROM backgrounds
    WHERE id = $1
  `, [id])
  .then(([ background ]) => background)
  .catch(err => {
    console.error(err);
  }),

  backgroundByName: (name) => db.any(`
    SELECT * FROM backgrounds
    WHERE name = $1
  `, [name])
  .then(([background]) => background)
  .catch(err => {
    console.error(err);
  }),

  subClassById : (id) => db.any(`
    SELECT * FROM sub_class
    WHERE id = $1
  `, [id])
  .then(([ subClass ]) => subClass)
  .catch(err => {
    console.error(err);
  }),

  subClassByClassId: (classId) => db.any(`
    SELECT * FROM sub_class
    WHERE class_id = $1
  `, [classId])
    .then(([subClass]) => subClass )
    .catch(err => {
      console.error(err);
    }),
  
  subClassByName: (name) => db.any(`
    SELECT * FROM sub_class
    WHERE name = $1
  `, [name])
  .then(([subClass]) => subClass)
  .catch(err => {
    console.error(err);
  }),

  armorByName: (name) => db.any(`
    SELECT * FROM armor
    WHERE name = $1
  `, [name])
  .then(([armor])=> armor)
  .catch(err =>{
    console.error(err);
  }),

  armorById: (id) => db.any(`
    SELECT * FROM armor
    WHERE id = $1
  `, [id])
  .then(([armor])=> armor)
  .catch(err=>{
    console.error(err);
  }),

  skillIdByBackgroundId: (idBackground) => db.any(`
    SELECT skill_id FROM background_skill
    WHERE background_id = $1
  `, [idBackground])
  .then(skills => skills)
  .catch(err =>{
    console.error(err);
  }),

  classInfoByLevelAndName: (level, name) => db.any(`
    SELECT * FROM $2
    WHERE level = $1
  `, [level, name])
  .then(([characterClass])=> characterClass)
  .catch(err=>{
    console.error(err);
  }),

  classFeaturesUpToLevelFromNamedTable: (level, name) => db.any(`
    SELECT feature FROM $2
    WHERE level <= $1
  `, [level, name])
  .then((classFeatures) => classFeatures)
  .catch(err=>{
    console.error(err);
  }),

  armorIdByCharacterId: (characterId) => db.any(`
    SELECT armor_id FROM character_armor
    WHERE character_id = $1
  `, [characterId])
  .then(([armorId]) => armorId)
  .catch(err=>{
    console.error(err);
  }),

  languageIdsByCharacterId: (characterId) => db.any(`
    SELECT language_id FROM character_languages
    WHERE character_id = $1
  `, [characterId])
  .then((languageIds) => languageIds)
  .catch(err=>{
    console.error(err);
  }), 

  skillIdsByCharacterId: (characterId) => db.any(`
    SELECT skills_id FROM character_skills
    WHERE character_id = $1
  `, [characterId])
  .then(skills => skills)
  .catch(err=>{
    console.error(err);
  }),

  toolIdsByCharacterId: (characterId) => db.any(`
    SELECT tool_id FROM character_tool
    WHERE character_id = $1
  `, [characterId])
  .then(tools => tools)
  .catch(err =>{
    console.error(err);
  }),

  weaponIdsByCharacterid: (characterId) => db.any(`
    SELECT weapon_id FROM character_weapon
    WHERE character_id = $1
  `, [characterId])
  .then(weapons => weapons)
  .catch(err =>{
    console.error(err);
  }),


  armorIdByClassId: (classId) => db.any(`
    SELECT armor_id FROM class_armor
    WHERE class_id = $1
  `, [classId])
  .then(armorId => armorId)
  .catch(err=>{
    console.error(err);
  }),

  featuresByClassIdAndLevel: (classId, level) => db.any(`
    SELECT feature FROM class_features
    WHERE class_id = $1 AND level <= $2
  `, [classId, level])
  .then(features => features)
  .catch(err => {
    console.error(err);
  }),

  skillIdsByClassId: (classId) => db.any(`
    SELECT skill_id FROM class_skills
    WHERE class_id = $1
  `, [classId])
    .then(skillIds => skillIds)
  .catch(err => {
    console.error(err);
  }),

  spellIdsByClassId: (classId) => db.any(`
    SELECT spell_id FROM class_spells
    WHERE class_id = $1
  `, [classId])
  .then(spellIds => spellIds)
  .catch(err => {
    console.error(err);
  }),

  toolIdsByClassId: (classId) => db.any(`
    SELECT tool_id FROM class_tool
    WHERE class_id = $1
  `, [classId])
  .then(toolIds => toolIds)
  .catch(err => {
    console.error(err);
  }),

  weaponIdsByClassId: (classId) => db.any(`
    SELECT weapon_id FROM class_weapon
    WHERE class_id = $1
  `, [classId])
  .then(weaponIds => weaponIds)
  .catch(err=>{
    console.error(err);
  }),

  domainSpellIdsByLevelAndDomainId: (domainId, level) => db.any(`
    SELECT spells_id FROM domain_spells
    WHERE sub_class_id = $1 AND level <= $2
  `, [domainId, level])
  .then(spellIds => spellIds)
  .catch(err => {
    console.error(err);
  }),

  
};