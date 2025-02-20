const container = document.querySelector(".container");
const main = document.querySelector(".main");
const size = document.querySelector("#size");
const reset = document.querySelector("#clear");
const randomize = document.querySelector("#randomize");


function squares(num){
    //The flex container is a box of side 650px with a gap of 5px between each square inside
    //The side of square is determined taking the gap into consideration while trying to maintain the container size
    randomize.checked=false;
    let gap = (num+1)*5;
    let length = (650-gap)/num;
    let sqs = Math.round(length * 100)/100;

    for(i=1;i<=num*num;i++){
        let sq = document.createElement("div");
        sq.setAttribute("class","sq");

    //creating a hidden p inside each square to keep count of mouseover to determine opacity

        const p = document.createElement("p");         
        sq.appendChild(p);
        p.textContent=`${1}`;
        p.setAttribute("style","visibility: visible;");

        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(200, 162, 200,10%); cursor: pointer`);
        
        sq.addEventListener("mouseover",()=>{
    //once counter reaches 10, maximum opacity is achieved

            if(p.textContent<=10){                 
                let count = p.textContent;
                p.textContent++;
                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(200, 162, 200,${(10+(count*10))}%); cursor: pointer`);
                //console.log(count); 
            }
            else{
                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(200, 162, 200); cursor: pointer`);
            }
            
        });    
        reset.addEventListener("click",() => {
            p.textContent=`${1}`;
            count = p.textContent;
            sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(200, 162, 200,0.15); cursor: pointer`);
        });

        randomize.addEventListener("click",() =>{
            if(randomize.checked){
                p.textContent=`${1}`;
                count = p.textContent;
                let r = Math.round((Math.random()*256)+1);
                let g = Math.round((Math.random()*256)+1);
                let b = Math.round((Math.random()*256)+1);
                //console.log(r,g,b);

                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(${r}, ${g}, ${b},10%); cursor: pointer`);
                sq.addEventListener("mouseover",()=>{

                //once counter reaches 10, maximum opacity is achieved

                    if(p.textContent<=10){                 
                        let count = p.textContent;
                        p.textContent++;
                        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(${r}, ${g}, ${b},${(10+(count*10))}%); cursor: pointer`);
                        //console.log(count); 
                    }
                    else{
                        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(${r}, ${g}, ${b}); cursor: pointer`);
                    }
                    
                });
                reset.addEventListener("click",() => {
                    p.textContent=`${1}`;
                    count = p.textContent;
                    sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(${r}, ${g}, ${b},0.15); cursor: pointer`);
                });
            }
            else{
                p.textContent=`${1}`;
                count = p.textContent;
                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(200, 162, 200,10%); cursor: pointer`);
                sq.addEventListener("mouseover",()=>{

                //once counter reaches 10, maximum opacity is achieved

                    if(p.textContent<=10){                 
                        let count = p.textContent;
                        p.textContent++;
                        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(200, 162, 200,${(10+(count*10))}%); cursor: pointer`);
                        //console.log(count); 
                    }
                    else{
                        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(200, 162, 200); cursor: pointer`);
                    }
                    
                });  

                reset.addEventListener("click",() => {
                    p.textContent=`${1}`;
                    count = p.textContent;
                    sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(200, 162, 200,0.15); cursor: pointer`);
                });
            }
        });

        container.appendChild(sq);
    }

    let list = document.querySelectorAll(".sq");
    return list;
}

let del = squares(8);
//console.log(del);


size.addEventListener("click",() => {

    let input = prompt("Enter number of squares per side (Max: 60)");
    console.log(input);

    del.forEach(element =>{
        element.remove();
    })

    let inputNum = Number(input);
    if(inputNum>0 && inputNum<60){
        del = squares(inputNum);
    }
    else{
        alert("Invalid entry");
        location.reload();
    }

});




