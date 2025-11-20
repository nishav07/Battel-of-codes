console.log(`this practice file is for OOPs babsed questions`);

class parent  {
    constructor(name,age,behave){
        this.name = name;
        this.age = age;
        this.behave = behave;
    }

    sayhi(){
        console.log(`hi i am ${this.name}`)
    }

    behaviour(){
        console.log(`i am a ${this.behave} type person`)
    }
}

const parent1 = new parent("rohan",30,"kind");

parent1.sayhi();
parent1.behaviour();

class kids extends parent {
    constructor(name,age,behave,school,hobby){
        super(name,age,behave);
        this.school = school;
        this.hobby = hobby;
    }

    aboutme(){
        console.log(`my school name is ${this.school} and my hobby is ${this.hobby}`)
    }
}

const kid1 = new kids("sohan",10,"kind","DPS","playing")

kid1.sayhi();
kid1.behaviour();
kid1.aboutme();