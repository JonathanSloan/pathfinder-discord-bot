const rollPercent = require("../utils/rollPercent");

module.exports.run = async (client, message) => {
  message.channel.send(`**Result:** ${rollPercent()}%`);
};
