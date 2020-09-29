const rollD20 = require("../utils/roll20");

module.exports.run = async (client, message, args) => {
  message.channel.send(rollD20(args));
};
