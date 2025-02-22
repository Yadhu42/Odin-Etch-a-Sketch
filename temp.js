function gridCreate(num){
    let containerLength= 625;
    let squareSide = Math.round(((containerLength/num)* 100))/100;
    let squareBorder = 1.6*num;
    container.style.width=`${625+squareBorder}px`;
    container.style.height=`${625+squareBorder}px`;
    const defaultColor = `#ffff`;
    

    for(i=1;i<=num*num;i++){
        let sq = document.createElement(`div`);
        sq.setAttribute(`class`,`sq`);

        // const p = document.createElement(`p`);         
        // sq.appendChild(p);
        // p.textContent=`${1}`;

        sq.style.flexBasis=`${squareSide}px`;
        sq.style.height=`${squareSide}px`;
        sq.style.border=`solid 1px black`;
        sq.style.backgroundColor = defaultColor;

    }
}

function bgColor(){

}

function opacitySettin(){

}

function randomizer(){

}