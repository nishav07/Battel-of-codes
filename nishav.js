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
let ul = document.getElementById("ul");
let btn = document.getElementById("G").addEventListener("click" , () => {
    coolors();
})


async function coolors (){
    try{
    let inval = document.getElementById("input").value;
    let url = `https://www.thecolorapi.com/scheme?hex=0047AB&mode=${inval}`;
    const res =  await fetch(url);
    const data = await res.json();
    console.log(data.colors[0].hex.value);
    let colorArr = data.colors;
    console.log(colorArr)
    colorArr.forEach(e => {
        let li = document.createElement("li");
        li.innerText = e.hex.value;
        ul.appendChild(li);
        console.log(e.hex.value)
    });

    } catch(err){
        console.log(`err is ${err}`)
    }
}


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
//---------------------------------------------------------------------------------------------------------