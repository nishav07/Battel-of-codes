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


