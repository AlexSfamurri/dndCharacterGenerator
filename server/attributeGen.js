const { dice } = require('./app');

const roll = new dice();

const str = roll.roll('2d6+6');
const dex = roll.roll('2d6+6');
const con = roll.roll('2d6+6');
const int = roll.roll('2d6+6');
const wis = roll.roll('2d6+6');
const cha = roll.roll('2d6+6');

module.exports = { 
  str: str.result,
  dex: dex.result,
  con: con.result,
  int: int.result,
  wis: wis.result,
  cha: cha.result
}