const rollDice = (dice) => {
  // create arr from str at specific character
  const arrFromStr = (str, at) => str.trim().split(at);

  // rolls a die of specified sides
  const rollDieType = (sides) => Math.ceil(Math.random() * sides);

  let count;
  let rolls = [];
  let sides;

  // rolls dice
  dice.forEach((die) => {
    // if dice, calculate, then push
    if (die.includes(`d`)) {
      // split into array @ `d`
      const diceToRoll = arrFromStr(die, `d`);

      count = diceToRoll[0];
      sides = diceToRoll[1];

      // roll `sides` `count` times
      for (let die = 1; die <= count; die++) {
        rolls.push(rollDieType(sides));
      }

      count += count;

      // if num, push
    } else {
      rolls.push(Number(die));
      count += die;
    }
  });

  return [
    `**Rolled:** \`${dice.toString().split(",").join(" + ")}\``,
    `**Rolls:** \`${rolls.toString()}\``,
    `**Result:**: \`${rolls.reduce((acc, val) => acc + val)}\``,
  ];
};

module.exports = rollDice;
