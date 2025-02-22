const container = document.querySelector(`.container`);
const main = document.querySelector(`.main`);
const size = document.querySelector(`#size`);
const reset = document.querySelector(`#clear`);
const randomize = document.querySelector(`#randomize`);
let rainbowMode = false;

randomize.addEventListener("input",(event) =>{
    rainbowMode=true;
    console.log("rainbow mode on");
});


function squares(num){
    //The flex container is a box of side 650px with a gap of 5px between each square inside
    //The side of square is determined taking the gap into consideration while trying to maintain the container size
    randomize.checked=false;
    let containerLength= 625;
    let squareSide = Math.round(((containerLength/num)* 100))/100;
    let squareBorder = 1.6*num;
    container.style.width=`${625+squareBorder}px`;
    container.style.height=`${625+squareBorder}px`;
    const defaultColor = `#ffff`;
    

    for(i=1;i<=num*num;i++){
        let sq = document.createElement(`div`);
        sq.setAttribute(`class`,`sq`);

    //creating a hidden p inside each square to keep count of mouseover to determine opacity

        const p = document.createElement(`p`);         
        sq.appendChild(p);
        p.textContent=`${1}`;

        sq.style.flexBasis=`${squareSide}px`;
        sq.style.height=`${squareSide}px`;
        sq.style.border=`solid 1px black`;
        sq.style.backgroundColor = defaultColor;
        
        //sq.addEventListener(`mouseover`,()=>{
    //once counter reaches 10, maximum opacity is achieved

        //     if(p.textContent<=10){                 
        //         let count = p.textContent;
        //         p.textContent++;
        //         sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(200, 162, 200,${(10+(count*10))}%)`);
        //         //console.log(count); 
        //     }
        //     else{
        //         sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(200, 162, 200);`);
        //     }
            
        // });    
        // reset.addEventListener(`click`,() => {
        //     p.textContent=`${1}`;
        //     count = p.textContent;
        //     sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color: rgb(200, 162, 200,0.15);`);
        // });

        // randomize.addEventListener(`click`,() =>{
        //     if(randomize.checked){
        //         p.textContent=`${1}`;
        //         count = p.textContent;
        //         let r = Math.round((Math.random()*256)+1);
        //         let g = Math.round((Math.random()*256)+1);
        //         let b = Math.round((Math.random()*256)+1);
        //         //console.log(r,g,b);

        //         sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color: rgb(${r}, ${g}, ${b},10%); `);
        //         sq.addEventListener(`mouseover`,()=>{

        //         //once counter reaches 10, maximum opacity is achieved

        //             if(p.textContent<=10){                 
        //                 let count = p.textContent;
        //                 p.textContent++;
        //                 sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(${r}, ${g}, ${b},${(10+(count*10))}%);`);
        //                 //console.log(count); 
        //             }
        //             else{
        //                 r = Math.round((Math.random()*256)+1);
        //                 g = Math.round((Math.random()*256)+1);
        //                 b = Math.round((Math.random()*256)+1);
        //                 sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(${r}, ${g}, ${b}); `);
        //             }
                    
        //         });
        //         reset.addEventListener(`click`,() => {
        //             p.textContent=`${1}`;
        //             count = p.textContent;
        //             sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color: rgb(${r}, ${g}, ${b},0.15); `);
        //         });
        //     }
        //     else{
        //         p.textContent=`${1}`;
        //         count = p.textContent;
        //         sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color: rgb(200, 162, 200,10%); `);
        //         sq.addEventListener(`mouseover`,()=>{

        //         //once counter reaches 10, maximum opacity is achieved

        //             if(p.textContent<=10){                 
        //                 let count = p.textContent;
        //                 p.textContent++;
        //                 sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(200, 162, 200,${(10+(count*10))}%); `);
        //                 //console.log(count); 
        //             }
        //             else{
        //                 sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color:rgb(200, 162, 200); `);
        //             }
                    
        //         });  

        //         reset.addEventListener(`click`,() => {
        //             p.textContent=`${1}`;
        //             count = p.textContent;
        //             sq.setAttribute(`style`,`flex-basis:${sqs}px; height:${sqs}px; background-color: rgb(200, 162, 200,0.15); `);
        //         });
        //     }
        // });

        container.appendChild(sq);
    }

    let list = document.querySelectorAll(`.sq`);
    return list;
}

let del = squares(10);
//console.log(del);

container.addEventListener(`mouseenter`,bgColor,{
    capture: true
});

function bgColor(event){
    if(rainbowMode){
        let r = Math.round((Math.random()*256)+1);
        let g = Math.round((Math.random()*256)+1);
        let b = Math.round((Math.random()*256)+1);
        event.target.style.backgroundColor=`rgb(${r},${g},${b},1)`;
    }
    else{
        event.target.style.backgroundColor="black";
    }
}

size.addEventListener(`click`,() => {

    let input = prompt(`Enter number of squares per side (Max: 60)`);
    console.log(input);

    del.forEach(element =>{
        element.remove();
    })

    let inputNum = Number(input);
    if(inputNum>0 && inputNum<60){
        del = squares(inputNum);
    }
    else{
        alert(`Invalid entry`);
        location.reload();
    }

});




