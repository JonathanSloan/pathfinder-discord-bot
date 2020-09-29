// Return a list of all commands
const commandList = [
    `**!d20:** `,`**!d100 :**`
];

module.exports.run = async (client, message, args) => {
    message.channel.send(rollD20(args));
  };  

module.exports = commandList;