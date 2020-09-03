const rollDice = (dice) => {
  // create arr from str at specific character
  const arrFromStr = (str, at) => str.trim().split(at);

  // array of dice to roll
  const diceArray = arrFromStr(dice, ` `);

  // rolls a die of specified sides
  const rollDieType = (sides) => Math.ceil(Math.random() * sides);

  let count;
  let rolls = [];
  let sides;
  // rolls number of dice specified
  diceArray.forEach((die) => {
    const diceToRoll = arrFromStr(die, `d`);

    count = diceToRoll[0];
    sides = diceToRoll[1];

    for (let die = 1; die <= count; die++) {
      rolls.push(rollDieType(sides));
    }
  });

  const rolled = new Object({
    numberOfRolls: count,
    numberOfSides: sides,
    results: rolls,
    total: rolls.reduce((acc, val) => acc + val),
  });

  return `*Rolled ${rolled.numberOfRolls}d${
    rolled.numberOfSides
  }. Results: \n\`${rolled.results.toString()}\` total: \`${rolled.total}\`*`;
};

module.exports = rollDice;
