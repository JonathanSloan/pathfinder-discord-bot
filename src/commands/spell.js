const discord = require("discord.js");
const getSpellData = require("../utils/getSpell");

module.exports.run = async (client, message, args) => {
  const spellData = getSpellData(args);

  const noResults = new discord.MessageEmbed()
    .setColor("#ff1a1a")
    .setTitle(spellData);

  const spellInfo = new discord.MessageEmbed()
    .setColor("#a966c2")
    .setTitle(spellData.name)
    .setURL(spellData.url)
    .addFields(
      { name: "Level", value: spellData.spell_level },
      { name: "Casting Time", value: spellData.casting_time },
      { name: "Duration", value: spellData.duration },
      { name: "Range", value: spellData.range },
      { name: "Target(s)", value: spellData.targets },
      { name: "Saving Throw", value: spellData.saving_throw },
      { name: "Spell Resistance", value: spellData.spell_resistance },
      { name: "Description", value: spellData.description }
    );

  const spellInfoSlim = new discord.MessageEmbed()
    .setColor("#a966c2")
    .setTitle(spellData.name)
    .setURL(spellData.url)
    .addFields(
      { name: "Level", value: spellData.spell_level },
      { name: "Casting Time", value: spellData.casting_time },
      { name: "Duration", value: spellData.duration },
      { name: "Range", value: spellData.range },
      { name: "Target(s)", value: spellData.targets },
      { name: "Saving Throw", value: spellData.saving_throw },
      { name: "Spell Resistance", value: spellData.spell_resistance },
      { name: "Description", value: "-" }
    )
    .setFooter(spellData.description);

  // If no spell is found, show error message
  if (typeof spellData == "string") message.channel.send(noResults);

  // if spell description is too long, show slim desc
  if (spellData.description.length > 1024) message.channel.send(spellInfoSlim);
  // else show regular
  else message.channel.send(spellInfo);
};
