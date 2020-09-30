// Import environment variable
require("dotenv").config();

// import discord & instantiate client
const discord = require("discord.js");
const client = new discord.Client();

// import file system and path modules from nodeJS
const fs = require("fs").promises;
const path = require("path");

// prefix for commands
const PREFIX = `!`;

// log bot into discord server
client.login(process.env.BOT_TOKEN);

// add commands prop to client OBJ
client.commands = new Map();

// shorthand
let cmds = client.commands;

// when bot is ready
client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
});

// listen to messages
client.on("message", (message) => {
  // ignores bot messages
  if (message.author.bot) return;

  // ignore message if not prefix
  if (!message.content.startsWith(PREFIX)) return;

  // creates array out of args, cmd first
  let cmdArgs = message.content
    .substring(PREFIX.length)
    .split(new RegExp(/\s+/));

  // removes cmdArgs[0] & sets it to cmdName
  let cmdName = cmdArgs.shift();

  // if cmd exists execute it, else show error
  if (cmds.get(cmdName)) cmds.get(cmdName).run(client, message, cmdArgs);
  else message.channel.send(`${cmdName} is not a valid command.`);
});

// load commands
(async function registerCommands(dir = "commands") {
  // read directory/file
  let files = await fs.readdir(path.join(__dirname, dir));

  // loop through files
  for (let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));

    // if `file` is a directory, recursively call recurDir
    if (stat.isDirectory()) registerCommands(path.join(dir, file));
    else if (file.endsWith(".js")) {
      let cmdName = file.substring(0, file.indexOf(".js"));
      let cmdModule = require(path.join(__dirname, dir, file));

      client.commands.set(cmdName, cmdModule);
      // console.log(client.commands);
    }
  }
})();
