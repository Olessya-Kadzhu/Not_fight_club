class NPC {
constructor(name, hp, head, neck, body, belly, legs){
this.name = name;
this.hp = hp;
this.head = head;
this.neck = neck;
this.body = body;
this.belly = belly;
this.legs = legs;
}

// Вывести на экран
sayHello(){
    console.log(`I greed you ${this.name}. Welcome to the game!`);
    console.log(`Choose your Hero`);
    console.log(`Choose your Enemy`);
    
}

info(extend){
// Вывести на экран
console.log(`Statistic of ${extend.name}`);
console.log(`Health: ${extend.hp} `);

}


attack(enemy){
    console. log(`${this.name} attacks ${enemy.name}`)

//Наличие брони - power?
if(enemy.armor <= 0){
enemy.armor = 0; 
enemy.hp -= this.power;
}else{
enemy.armor -= this.power;
}


console. log(`${this.name} wounds ${enemy.name}`);

this.info();
}

}


class Hero extends NPC {
constructor(name, hp, head, neck, body, belly, legs, armor){
super(name, hp, head, neck, body, belly, legs);
this.armor = armor;
}
useArmor(){
// Вывести на экран
console.log(`${this.name} use Armor!`)

}

}

class Enemy extends NPC{
constructor(name, hp, head, neck, body, belly, legs, weapon){
super(name, hp, head, neck, body, belly, legs);
this.weapon = weapon;
}
useWeapon(){
console.log(`${this.name} use Weapon`)
}

}


let heroChar = new Hero("Hero", 150, 20, 10, 11, 15, 5);

let enemyChar = new Enemy("Enemy", 180, 20, 10, 11, 15, 5);
// let enemyChar1 = new...

//Массив с персонажами. Их нужно дать выбрать юзеру
// let arrayHero = [enemyHero, enemyHero1];
// let arrayEnemy = [enemyChar, enemyChar1];


// !CAME LOGIC!
let play;


heroChar.sayHello();

// Вывести на экран
let isGo = confirm("Are yor ready to Fight?");

play = isGo;

if(isGo){
// Вывести на экран  
console.log("Let the battle begin!");

while(play){

// Выбор хода случайный. Вывести на экран

let randomNumber = Math.round(Math.random());

if (randomNumber===0){
heroChar.attack(enemyChar);
}else{
enemyChar.attack(heroChar);
}


if(heroChar.hp <= 0){
play = false;
// Вывести на экран 
console.log(`${heroChar.name} is died a heroic death!`);
}

if(enemyChar.hp <= 0){
play = false;
// Вывести на экран 
console.log(`${heroChar.name} is winner! ${enemyChar.name} defeated!`);
}
}
}
else
// Вывести на экран  
{
console.log("Coward! Find the strength to fight!");
}



