console.log(`this practice file is for OOPs babsed questions`);

// class parent  {
//     constructor(name,age,behave){
//         this.name = name;
//         this.age = age;
//         this.behave = behave;
//     }

//     sayhi(){
//         console.log(`hi i am ${this.name}`)
//     }

//     behaviour(){
//         console.log(`i am a ${this.behave} type person`)
//     }
// }

// const parent1 = new parent("rohan",30,"kind");

// parent1.sayhi();
// parent1.behaviour();

// class kids extends parent {
//     constructor(name,age,behave,school,hobby){
//         super(name,age,behave);
//         this.school = school;
//         this.hobby = hobby;
//     }

//     aboutme(){
//         console.log(`my school name is ${this.school} and my hobby is ${this.hobby}`)
//     }
// }

// const kid1 = new kids("sohan",10,"kind","DPS","playing")

// kid1.sayhi();
// kid1.behaviour();
// kid1.aboutme();


//--------------------practice question 1---------------------------------------------------------------

const normalAttack = 100;

class Character{
    constructor(name,health,power){
        this.name = name;
        this.health = health;
        this.power = power;
    }

    attack(target){
        if(this.health < 0){
            this.health = 0;
        }

        if(this.health < 0 || this.power < 200){
            return;
        } else {
            this.power = this.power - 200
            target.health = target.health - normalAttack
        }
    }

    heal(value){
        if(this.health > 200){
            return
        } else {
            this.health = this.health + value;
        }
    }

    isAlive(){
        if(this.health <= 0){
            return false
        } else {
            return true
        }
    }
}

class Warrior extends Character {
    constructor(name,health,power,weapon) {
        super(name,health,power);
        this.weapon = weapon;
    }

    specialAttack(target){
         if(this.health < 0){
            this.health = 0;
        }

          if(this.health <= 0 || this.power < 300){
            return
        } else {
            this.power = this.power - 300
            let special = normalAttack * 2
            target.health = target.health - special
        }
    }
}

const adam = new Warrior("adam" ,200,500,"sword");
const olivia = new Character("olivia",200,300);

adam.attack(olivia);
const check = olivia.isAlive();

console.log(check,olivia.health);