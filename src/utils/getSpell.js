const getSpellData = (requestedSpell) => {
  // reduce args array into hyphenated spell name
  const spellName = requestedSpell.reduce((acc, val) => `${acc}-${val}`);

  // create url string based on spellName
  return `https://www.d20pfsrd.com/magic/all-spells/${spellName[0]}/${spellName}/`;
};

module.exports = getSpellData;
