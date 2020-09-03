const getSpellData = (requestedSpell) => {
  const spellName = requestedSpell.reduce(
    (acc, val) => `${acc.replace("'", "-")}-${val}`
  );

  // create url string based on spellName
  return `https://www.d20pfsrd.com/magic/all-spells/${spellName[0]}/${spellName}/`;
};

module.exports = getSpellData;
