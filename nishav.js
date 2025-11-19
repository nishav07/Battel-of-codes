// const h1 = document.querySelector("#h");

// function changecolor(color,time){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//         h1.style.color = color;
//         res();
//     },time);
//     })
// }

// changecolor("blue" , 2000 , () => {
//     changecolor("green" , 2000 , () => {
//         changecolor("pink" , 2000, () => {
//             changecolor("royalblue" , 2000 , () => {
//                 changecolor("red" , 2000 )
//             })
//         })
//     })
// })

// changecolor('red' , 2000)
// .then(() => changecolor("blue" , 2000))
// .then(() => changecolor("pink" , 2000))
// .then(() => changecolor("green" , 2000))
// .then(() => changecolor("black" , 2000))
// .catch((err) => {
//     console.log(err);
// })


// async function changecolor2() {
//     await changecolor("red" , 2000);
//     await changecolor("blue" , 2000);
//     await changecolor("green" , 2000);
//     await changecolor("black" , 2000);
//     await changecolor("pink" , 2000);
//     await changecolor("red" , 2000);
// }
// changecolor2()

//----------------color pallet genrateor/------------------------------------------
// let ul = document.getElementById("ul");
// let btn = document.getElementById("G").addEventListener("click" , () => {
//     coolors();
// })


// async function coolors (){
//     try{
//     let inval = document.getElementById("input").value;
//     let url = `https://www.thecolorapi.com/scheme?hex=0047AB&mode=${inval}`;
//     const res =  await fetch(url);
//     const data = await res.json();
//     console.log(data.colors[0].hex.value);
//     let colorArr = data.colors;
//     console.log(colorArr)
//     colorArr.forEach(e => {
//         let li = document.createElement("li");
//         li.innerText = e.hex.value;
//         ul.appendChild(li);
//         console.log(e.hex.value)
//     });

//     } catch(err){
//         console.log(`err is ${err}`)
//     }
// }














//////////////////////////////////////////////////////////////////////////


// async function giveData(){
//     let res = await fetch('https://randomuser.me/api/');
//     let data = await res.json();
//     console.log(res)
//     console.log(data);
//     let first = data.results[0].name.first;
//     let last = data.results[0].name.last;

//     userdata = {
//         name:first + last
//     }
//     console.log(userdata);
// }

// giveData();

// fetch('https://randomuser.me/api/')
// .then((res) => {
//     let response = res.json()
//     return response
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(`err = ${err}`);
// })


// fetch(`https://api.adviceslip.com/advice`)
// .then(res => { let response = res.json(); return response})
// .then(data => { console.log(data)})
// .catch(err => {console.log(err)})


// async function advice (){
//     let res = await fetch(`https://api.adviceslip.com/advice`);
//     let data = await res.json();
//     console.log(data)
// }

// advice();


let lang = ["python" , "javascript" ,"java" , "C++" ,"C" , "assembly" ,"go" , "rust" ,"SQL" , "binary"]

// let newarr = lang.unshift('js') return total index and chnage the real array by adding at first
// let newarr = lang.shift(); return that first deleted index value and chnage the real array
// let newarr = lang.push("react");return total index and chnage the real array by adding at last
// let newarr = lang.pop();return that last deleted index value and chnage the real array
// let newarr = lang.slice(0 , 6);it return a piece of an array without chnaging real one and inclding last index
//  let newarr = lang.splice(0,4,"typescript"); // it return the previous index values and the chnage the orignal array and this workd from starting index to deleted count not index count;


// console.log(lang);
// console.log(newarr);


// fetch("https://api.adviceslip.com/advice")
// .then(res => res.json())
// .then(data => console.log(data.slip.advice))
// .catch(err => console.log(`err ${err}`))


// const advice = async () => {
//    try{
//     let res = await fetch(`https://api.adviceslip.com/advice`)
//     let data = await res.json();
//     console.log(data);
//    } catch (err){
//     console.log(`err` , err)
//    }
// }

// advice();


// fetch('https://api.adviceslip.com/advice')
// .then(res => response = res.json())
// .then(data => console.log(`data = `,data))
// .catch(err => console.log(err))

// const getAdvice = async() => {
//     try{
//         const response = await fetch(`https://api.adviceslip.com/advice`);
//         const data = await response.json();
//         console.log(`data`,data)
//     } catch(err){
//         console.log(err)
//     }
// }

// getAdvice()

//---------------question 2--------------------------------------------------------------------------------------
// let cart = [
//   ["apple", "banana", "mango"],
//   ["bread", "butter"],
//   ["pen", "notebook", "eraser", "scale"],
//   ["kurkure"]
// ];


// cart[1].unshift("milk")

// console.log(cart)

//-----------------------question 3-------------------------------------------------------------------------------
// let cart = [
//     ["apple", "banana", "mango"],
//     ["bread", "butter"],
//     ["pen", "notebook", "eraser", "scale"],
//     ["kurkure"]
// ];

// cart[2].splice(2,2)

// console.log(cart);

//----------------questionn 4------------------------------------------------------------------------------------

// let cart = [
//     ["apple", "banana", "mango"],
//     ["bread", "butter"],
//     ["pen", "notebook", "eraser", "scale"],
//     ["kurkure"]
// ];

// cart[3].splice(0,1,"chips ", "cooke ")
// console.log(cart);

//--------------------------------------solving leet code from easy to hard -------------------------------------
// You have a queue of students waiting in line:
// ["Ravi", "Neha", "Sohan"]

// 1. Add "Priya" to the front of the queue.
// 2. Remove the last student from the queue.
// 3. Add "Aman" at the end of the queue.
// 4. Remove the 2nd student in the queue (index 1).
// 5. Print the final queue.

// let arr = ["Ravi", "Neha", "Sohan"];

// arr.unshift("priya");
// arr.pop();
// arr.push("aman");
// arr.splice(1,1)//ravi gya 
// console.log(arr)

//-------------------------------------------------------------------------------------------------
// You receive a list of 10 batches of products in the format:
// [
//   ["shoes", "socks"],
//   ["cap"],
//   ["bag", "belt"],
//   ["pen"],
//   ["shoes", "socks", "hat"],
//   ["book"],
//   ["pen", "notebook"],
//   ["cap", "gloves"],
//   ["socks"],
//   ["hat", "shoes"]
// ]

// 1. Remove the last 2 batches.
// 2. In the 5th batch, remove "hat".
// 3. Replace the 3rd batch with ["wallet"]
// 4. Add ["bottle"] as a new batch at the start.
// 5. Print the final batch list


// //--------leet code hard level Q1 by chatgpt for logic building 
// let arr = [
//     ["shoes", "socks"],//0
//     ["cap"],//1
//     ["bag", "belt"],//2
//     ["pen"],//3
//     ["shoes", "socks", "hat"],//4
//     ["book"],//5
//     ["pen", "notebook"],//6
//     ["cap", "gloves"],//7
//     ["socks"],//8
//     ["hat", "shoes"]//9
// ]

// let shoes = 0;

// arr.splice(8,2)
// arr[4].pop();
// arr.splice(2,1,['wallet'])
// arr.unshift(["bottle"])
// console.log(arr)

// arr.forEach((value) => {
//     value.forEach((val) => {
//         console.log(val)//nested for each.. use krkke majaaj aagya 
//         if(val === "shoes"){
//             shoes++;
//         }
//     })
// })

// console.log(shoes)

// let price = [199, 349, 499, 599];

// let disPrice = price.map((p) => {
//     return Number(p) - 50;
// })

// console.log(disPrice); //(4) [149, 299, 449, 549]

// //q2

// let naam = ["Ravi", "Neha", "Aman"];

// let newFormat = naam.map((item) => {
//     return item = `Student:${item}`;
// })

// console.log(newFormat);

// let number = [2,45,6,7,8,4,35,6,4,56,];

// let even = number.filter((num) => {
//     return num % 2 === 0;
// })

// let odd = number.filter((num) => {
//     return num % 2 != 0;
// })
// console.log(even);
// console.log(odd);

// //question 1
// let marks = [88, 32, 67, 45, 91, 38, 76];

// let passStu = marks.filter((m) => {
//     return m >= 50;
// })

// console.log(passStu);

// //question 2

// let prices = [1200, 499, 799, 1500, 300];

// let high = prices.filter((p) => {
//     return p > 800;
// })

// console.log(high);

//---------leet code type question for find method-------------------------------
// let shelves = [
//   ["pen", "pencil", "eraser"],
//   ["scale", "notebook", "marker"],
//   ["tape", "glue", "sharpener"],
//   ["pencil box", "duster"]
// ];

// let notearr = shelves.find((i) => {
//     return i.find((i) => {
//         return i === "notebook";
//     })
// })

// console.log(notearr)
//-------------------------LEET code questions-------------------------------------------------------------------
// 🧩 Problem: SuperStore Order Management System

// 1. Fetch dummy product data from this API:
// https://fakestoreapi.com/products

// 2. From the fetched data:
//   a) Keep only those products that cost more than ₹500 
//   b) Convert all product titles to uppercase
//   c) Find the first product in category "electronics" 
//   d) Count total number of products in category "men's clothing" (forEach + manual counter)

// 3. On the filtered array:
//   e) Add a dummy product at the end (push)
//   f) Remove the first product (shift)
//   g) Insert a special sale item at the second position (splice)
//   h) Remove last 2 products just before checkout (pop x 2)

// 4. After operations:
//   i) Slice out top 3 items as "featured products" (slice)
//   j) Print original filtered array after all updates

// 🔒 Rules:
// - Use only the methods you’ve learned: no `reduce`, `some`, etc.
// - Use comments to separate steps
// - No need to show HTML, pure JS code

// 🔁 Bonus: Try to use async/await style for fetching

//------------LEET code final hard questions------------------------------------------------------------
// async function Product (){
//    try{
//     let res = await fetch('https://fakestoreapi.com/products');
//     let data = await res.json();

    //question 2a
    // let filterArr = data.filter((e) => {
    //     return e.price > 500
    // })


    // //question 2b
    // let UpperCase = data.map((e) => {
    //     return e.title.toUpperCase();
    // })


    // //question 2c
    // let electronics = data.find((e) => {
    //     return e.category === "electronics";
    // })


    // //question 2d
    // let mens = 0;
    // let mensCategory = data.forEach((e) => {
    //     if(e.category === "men's clothing"){
    //         mens++;
    //     }
    // })

    // //Q3E
    // filterArr.push({
    //     category:"electronics",
    //     discription:"none",
    //     id:69,
    //     price:999
    // })

    // //Q3f
    // filterArr.shift();

    // //Q3g
    // filterArr.splice(1,1,{
    //     category:"On sale products",
    //     discription:"fixes rate at 30 without any hiddent shit",
    //     id:169,
    //     price:30
    // })

    // //Q3h
    // filterArr.pop();
    // filterArr.pop();

    //Q3i accoridng to question iiahve to slice 3 but now  only oen item is available in teh iflterarr so i splice random 3 from main apis resposne

    // const generatenum = () => {
    //     let randomNumber = Math.floor(Math.random() * 20);
    //     return randomNumber
    // }

    // console.log(filterArr);
    // let idx = generatenum();
    // let first = data.splice(idx, Number(idx) + 1)//iye fail ho gya waise i know iski jarurat nhi thi but revision hi to hai to or kuch revise krk liye
    // console.log(first);
    // let featured = []

    // console.log(featured);
   //q3i
//    let featuredProducts =  data.slice(4,7);

//    //Q3j
//    console.log(data);
//    console.log(filterArr)


//    } catch (err){
//     throw err
//    }
// }


// Product();

//-----------------------more array methdos practice or maybe you cana say revision----------------------

// let arr = ["dog","cat","lion",["girrafe" , "zebra" , ["mouse" , "rat"]],"horse"];
// let newarr = [...arr];
// console.log(newarr)
// console.log(arr)
// console.log(flatmaparr)


// let arr2 = [2,3,4,[8,9,5],6,7,8,[1,2]]
// let flattmap = arr2.flatMap((x) => {
//     return [x,x*2]
// })

// console.log(flattmap);

// const users = [
//   { name: "Ram", hobbies: ["Cricket", "Reading"] },
//   { name: "Shyam", hobbies: ["Gaming"] },
//   { name: "Geeta", hobbies: ["Singing", "Dancing", "Painting"] },
// ];

// let fl = users.flatMap((user) => {
//     return user.hobbies.map((x) => {
//         return `${user.name} - ${x}`
//     })
// })

// console.log(fl)

// const arr = [5, 10, 15];

// let summ = arr.reduce((acc,curr) => {
//     return acc + curr * curr
// },0)

// console.log(summ)

//////////////////////////OOPPPPPPPPSSS///////////////////////////////////////////////////////////////
//old style factriy function
// function person(name,age){
//     this.name = name;
//     this.age = age;
//     this.hi = function(){
//         console.log(`hi i am ${this.name} and i am ${this.age} year old`)
//     }
// }

// let p1 = new person("nishav" , 19)
// p1.hi();

//new style factory funnx
// class Cars {
//     constructor(brand,model,year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     details(){
//         console.log(`this is a ${this.brand} ${this.model} from ${this.year}`);
//     }
// }

// const p1 = new Cars("maruti suzuki" , "Wagon R" , 2006);
// p1.details()

//--------------------------revising concepts-------------------------------
// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayhi(){
//         console.log(`hi my name is ${this.name} and my age is ${this.age}`);
//     }
// }


// let p1 = new person("rishav" , 20);
// p1.sayhi();

// class person2 extends person{
//     constructor(name,age,hobby) {
//         super(name,age)
//         this.hobbyy = hobby;
//     }

//     hobby(){
//         console.log(`hi my name is ${this.name} and my age is ${this.age} and my hobby is ${this.hobbyy}`)
//     }
// }

// let newp = new person2("nishav",18,"coding")

// newp.sayhi()
// newp.hobby()

//--------------------- new OOPPs fnx--------------------------------------------

class cricket{
    constructor(over,format,jersey){
        this.over = over;
        this.format = format;
        this.jersey = jersey;
    }

    aboutme(){
        console.log(`${this.format} is a ${this.over} over's game which is played in ${this.jersey} jersey`)
    }
}

let  odi = new cricket(50,"odi","blue");

odi.aboutme();

class gully extends cricket{
    constructor(over,format,jersey,rule){
        super(over,format,jersey);
        this.rule = rule;

    }

    gullyrule(){
        this.aboutme()
        console.log(`we have sepecial rules like ${this.rule}`);
    }
}

let newcric = new gully(10,"t10","random", "chath pe jaaye out");

newcric.aboutme()
newcric.gullyrule();

console.log("hello")



class parent{
    constructor(name,age,behave){
        this.name = name;
        this.age = age;
        this.behave = behave
    }

    sayhi(){
        console.log(`hi, i'm ${this.name} and my age is about ${this.age} year old and my behaviour is ${this.behave}`)
    }
}

class child extends parent{
    constructor(name,age,behave,skill,degree){
        super(name,age,behave)
        this.skill = skill;
        this.degree = degree;
    }

    aboutme(){
        console.log(`hi, i'm ${this.name} and my age is about ${this.age} year old and my behaviour is ${this.behave} and i have a skill like ${this.skill} and degree in ${this.degree}`);
    }
}

let parentss = new parent("nishav", 18,"happy");

parentss.sayhi();



//----------------------practice after exammmmmmmmmmm---------------------------------

// const arr = [1,2,3,2,4,1,5];

// const freq = {}

// for (let i = 0; i < arr.length; i++) {
   
//     let num = arr[i];

//     if(freq[num] === undefined){
//         freq[num] = 1
//     } else {
//         freq[num]++
//     }
// }

// const result = [];

// for (let el in freq) {
//     if(freq[el] === 2){
//         result.push(Number(el));
//     }
// }

// console.log(result);
//---------------------------------quetsion 2-------------------------------------------------------------------

// const str = "aeioumnpqr";

// const charList = "aeiou";

// let vowels = 0;
// let constants = 0;

// for (let i = 0 ; i < str.length; i++){
//     console.log(str[i]);
//     if(charList.includes(str[i])){
//         vowels++
//     } else {
//         constants++
//     }
// }

// console.log(vowels === constants);

//---------------------------------------------------question 3----------------------------------------------

//Without using sort(), find the second largest element in an array.
// const arr = [2,4,6,1,53,3]
// const neww = arr.sort((a,b) => {
//     return a - b
// })

// console.log(neww[4]);

const arr = [2,4,6,1,53,3];

const newArr = [];

let largest = 0;
let seclarge = 0;

for (let i = 0 ; i < arr.length; i++){
    const num = arr[i]
    if(num > largest){
        seclarge = largest;
        largest = num;
    }

    if(num < largest && num > seclarge){
        seclarge = num;
    }
}

console.log(seclarge);