// const { readFile } = require('fs');
// const fs = require('fs/promises');

// async function showdata() {
//     await fs.writeFile('me.txt' , "hello my name is nishav chaudhary")
//     let data = await fs.readFile("me.txt" , "utf-8")
//     console.log(data)
// }

// showdata()


async function coolors (theme){
    const res =  fetch(`https://colormagic.app/api/palette/search?q=${theme}`);
    const data = await res.json();
    console.log(data);
}
