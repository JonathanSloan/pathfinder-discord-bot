// get spell link from srd
const getSpellData = require("../utils/getSpell");

module.exports.run = async (client, message, args) => {
  message.channel.send(getSpellData(args));
};
