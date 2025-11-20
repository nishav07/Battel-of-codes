const { readFile } = require('fs');
const fs = require('fs/promises');

async function showdata(fileName,Data) {
    await fs.writeFile(fileName,Data)
    let data = await fs.readFile(fileName, "utf-8")
    console.log(data)
}

showdata("me.txt","kya haaal chaaal")
showdata("index.js","console.log(`chutiya`)")


