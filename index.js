function dwarfRollCall(dwarves) {
  var stored = [];
  for (let i = 0; i < dwarves.length; i++) {
    stored.push(`${i+1}. ${dwarves[i]} `)
  }
  return stored.join('')
}

function summonCaptainPlanet(planeteerCalls) {
  var array = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return array
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    }

  }
  return false
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return 'no cheese!'
}
