const container = document.querySelector(".container");

function squares(num){

    //The flex container is a box of side 650px with a gap of 5px between each square inside
    //The side of square is determined taking the gap into consideration while trying to maintain the container size

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
        p.setAttribute("style","visibility: hidden;");
        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: rgb(200, 162, 200,0.15); cursor: pointer`);
        sq.addEventListener("mouseover",()=>{

    //once counter reaches 10, maximum opacity is achieved

            if(p.textContent<=10){                 
                let count = p.textContent;
                p.textContent++;
                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(109, 85, 109,${(0.15+(count/10))}); cursor: pointer`);
                //console.log(count); 
            }
            else{
                sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(109, 85, 109); cursor: pointer`);
            }
            
        });
        sq.addEventListener("dblclick",()=>{
            p.textContent=`${1}`;
            count = p.textContent;
            sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(109, 85, 109,0.15); cursor: pointer`);
            
        });
        container.appendChild(sq);
    }


}

let v = squares(16);




