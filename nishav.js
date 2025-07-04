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






