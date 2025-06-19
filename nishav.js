const h1 = document.querySelector("#h");


function changecolor(color,time,next){
    setTimeout(() => {
        h1.style.color = color;
        if(next) next();
    },time);
}

changecolor("blue" , 2000 , () => {
    changecolor("green" , 2000 , () => {
        changecolor("pink" , 2000, () => {
            changecolor("royalblue" , 2000 , () => {
                changecolor("red" , 2000 )
            })
        })
    })
})