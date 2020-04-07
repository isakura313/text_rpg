

class Hero {
  constructor(health) {
      this.health = health;
      this.hide_flag = false;
      this.hide = function(){
          console.log("Вас опять не видно, враги не могут вас атаковать на протяжении 5 секунд");
          this.hide_flag  = true;
          setTimeout(() => {
            this.hide_flag  = false;
          }, 5000);
        
      }
    this.take_damage = function(damage_count){
        if(this.hide_flag  == false){
            health = health - damage_count; 
        }
    }
    this.stats = function(){
        return `здоровье у героя сейчас ${health}`
    }
  }
}





class EnemyFactory {
  constructor() {
    this.createEnemy = function (type) {
      let enemy;
      if (type == "goblin" || type == "ork") enemy = new Infantry();
      else if (type == "elf" || type == "skelet") enemy = new Archer();
      enemy.attack = function (obj) {
        return `The ${this._type} is attack`;
        obj.take_damage(5)
      };
      enemy.fall_back = function () {
        return "Враг исчезает вдали";
      };

      return enemy;
    };
  }
}

class Infantry {
  constructor() {
    this._type = "infantry";
    this.scream = () => {
      return `${this._type} кричит AAAAA za ordu`;
    };
    this.smash = (obj) =>{
        obj.take_damage(10);
    }
  }
}

class Archer {
  constructor() {
    this._type = "elf";
    this.magic_attack = (obj) => {
        obj.take_damage(15);
      return "Вокруг вас происходит магия, ничего не видно";
    };
  }
}

const enemy_army = new EnemyFactory();
let newGoblin = enemy_army.createEnemy("goblin");
let newElf = enemy_army.createEnemy("elf");
let Bilbo = new Hero(100);
let Sam = new Hero(110);

console.log(newGoblin.attack(Bilbo));
console.log(newGoblin.scream());
console.log(newElf.attack(Sam));
console.log(newElf.magic_attack(Bilbo));
console.log(Bilbo.stats())

newGoblin.attack(Bilbo)
Bilbo.hide()
// Object.freeze(Bilbo)

console.log(newElf.magic_attack(Bilbo));
console.log(Bilbo.stats())
console.log(newElf.magic_attack(Bilbo));
console.log(Bilbo.stats())
console.log(newElf.magic_attack(Bilbo));
console.log(Bilbo.stats())

setTimeout(() => {
    console.log(Bilbo.stats())
}, 5000);





// console.log(Bilbo.stats())
