const spellList = require("../data/spells.json");

const getSpellData = (requestedSpell) => {

  //  spell name as a string with spaces between
  const spellName = requestedSpell.map((i) => i).join(" ");

  // get spell matching lower-case requestedSpell
  const spell = spellList.find(
    (s) => s.name.toLowerCase() === spellName.toLowerCase()
  );

  // if matching spell is found
  if (spell) {
    // create hypenated string for url
    const spellUrlStr = requestedSpell.reduce(
      (acc, val) => `${acc.replace("'", "-")}-${val}`
    );

    // generate pathfinder SRD link
    const spellUrl = `https://www.d20pfsrd.com/magic/all-spells/${spellUrlStr[0]}/${spellUrlStr}/`;

    // add url to spell
    spell["url"] = spellUrl;

    return spell;
  }
  // else return message
  else return `No results were found for spell: ${spellName}.`;
};

module.exports = getSpellData;
