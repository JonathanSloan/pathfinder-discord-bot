// roll array of dice
const rollDice = require("../utils/rollDice");

module.exports.run = async (client, message, args) => {
  message.channel.send(rollDice(args));
};
