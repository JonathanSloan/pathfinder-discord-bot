function getSpellData(requestedSpell) {
  const spellName = requestedSpell.replace(`spell `, ``);

  function formatSpell(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  const formattedSpellName = formatSpell(spellName, ` `, `-`);
  const spell = formatSpell(formattedSpellName, `'`, "-");

  return `https://www.d20pfsrd.com/magic/all-spells/${spellName[0]}/${spell}/`;
}

module.exports = getSpellData;
