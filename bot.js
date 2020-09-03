// Import environment variable
require("dotenv").config();

// Import commands
require("./commands/roll");
require("./commands/spell");

// import discord and instantiate client
const discord = require("discord.js");
const client = new discord.Client();

// command files
const getSpellData = require("./commands/spell");
const rollDice = require("./commands/roll");

// prefix for commands
const PREFIX = `!`;

// when bot is ready
client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
});

// const rollDice = () => `${Math.floor(Math.random() * 6) + 1}`;

// listen to messages
client.on("message", (message) => {
  // ignores bot messages
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const CMD_NAME = message.content.trim().substring(PREFIX.length);

    if (CMD_NAME.startsWith(`spell `)) {
      message.channel.send(getSpellData(CMD_NAME));
    }

    if (CMD_NAME.startsWith(`roll `)) {
      message.channel.send(rollDice(CMD_NAME));
    }
  }
});

// log bot into discord server
client.login(process.env.BOT_TOKEN);
