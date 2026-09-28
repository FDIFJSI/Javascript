let hero = {
    "name"  : "Batman",
    "superpower" : "Black Man",
    "city" : "Gotham City",
}

console.log(hero)

//keys : values

console.log(Object.values(hero))

//getting a item from json
console.log(hero ["name"])
console.log(hero.city) 

//deleting a item
delete hero.name
console.log(hero)

//changing an item
hero.city ="Gotham village"
console.log(hero)

let character = {
    "name"  : "Mario",
    "health" : "100",
    "weapon" : "Sniper",
    "transport": "horse"
}
console.log("------------------------")
console.log(character)

for(let key in character){
    console.log(key)
}


Object.entries(character).forEach((key,value )=>{console.log(key, value)})