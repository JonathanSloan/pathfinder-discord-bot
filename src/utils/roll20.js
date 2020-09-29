const rollD20 = (mod) => {
    const roll = [];

    const roll20 = () => roll.push(Math.ceil(Math.random() * 20));
    
    roll20();
    
    roll.push(Number(mod));
    
    return [
        `**Rolling:** \`1d20 + ${mod}\``,
        `**Rolled:** \`${roll[0]} + ${Number(mod)}\``,
        `**Result:**: \`${roll.reduce((acc, val) => acc + val)}\``
    ]
}

module.exports = rollD20;
