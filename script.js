const container = document.querySelector(`.container`);
const main = document.querySelector(`.main`);
const size = document.querySelector(`#size`);
const reset = document.querySelector(`#clear`);
const mode = document.querySelector(`.dmode`);

document.addEventListener(`DOMContentLoaded`,()=>{
let del = squares(13);
mode.value=`Drawing`;    
remover(`Drawing`);

size.addEventListener(`click`,()=>{
    let input = prompt(`Enter grid size (Max 60)`);
    if(input){
        del.forEach((element) =>{
            element.remove();
        });
        del = squares(input);
    }
});

mode.addEventListener(`input`,(event)=>{
    remover(event.target.value);
});

reset.addEventListener(`click`,()=>{
    del.forEach((element) =>{
        element.style.backgroundColor=`#ffff`
        element.setAttribute(`counter`,`1`);
    });
});

});

function squares(num){
    container.style.border = `1px solid black`;
    let containerLength= 625;
    let squareSide = containerLength/num;
    container.style.width=`${containerLength+1.8}px`;
    const defaultColor = `#ffff`;
    

    for(i=1;i<=num*num;i++){
        let sq = document.createElement(`div`);
        sq.setAttribute(`class`,`sq`);
        sq.setAttribute(`counter`,`1`);

        sq.style.margin=`0`;
        sq.style.padding=`0`;
        sq.style.width=`${squareSide}px`;
        sq.style.height=`${squareSide}px`;
        sq.style.border=`1px solid lightgray`;
        sq.style.backgroundColor = defaultColor;
        container.appendChild(sq);
    }

    let list = document.querySelectorAll(`.sq`);
    return list;
}

function remover(mode){
    
    function opacityEffect(square){

        let count =  Number(square.getAttribute(`counter`));
        if(count<10){
            square.style.backgroundColor=`rgb(70, 130, 180, ${count/10})`;
            square.setAttribute(`counter`,`${count+1}`);
        }
        else{
            square.style.backgroundColor=`rgb(70, 130, 180,1)`;
            square.setAttribute(`counter`,`10`);
            return;
        }
    } 

    function bgColor(event){
        if(event.target !== container){
            event.stopPropagation();

            if(mode===`Drawing`){
                event.target.style.opacity = 1;
                event.target.style.backgroundColor=`rgb(0,0,0,1)`;
            }
            else if(mode===`Rainbow`){
                event.target.style.opacity = 1;
                let r = Math.round((Math.random()*256)+1);
                let g = Math.round((Math.random()*256)+1);
                let b = Math.round((Math.random()*256)+1);
                event.target.style.backgroundColor=`rgb(${r},${g},${b},1)`;
            }
            else if(mode===`Darken`){
                opacityEffect(event.target);
            }

        }

        }
    container.addEventListener(`mouseenter`,bgColor,{
        capture: true
    });
    
    }





