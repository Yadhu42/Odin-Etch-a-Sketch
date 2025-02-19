const container = document.querySelector(".container");

function squares(num){

    let gap = (num-1)*5;
    let length = (650-gap)/num;
    let sqs = Math.round(length * 100)/100;

    for(i=1;i<=num*num;i++){
        let sq = document.createElement("div");
        sq.setAttribute("class","sq");
        sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color: #C8A2C8; cursor: pointer`);
        sq.addEventListener("mouseover",()=>{
            sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:rgb(0, 0, 0); cursor: pointer`);
        });
        sq.addEventListener("dblclick",()=>{
            sq.setAttribute("style",`flex-basis:${sqs}px; height:${sqs}px; flex-shrink: 0; background-color:#C8A2C8; cursor: pointer`);
        });
        container.appendChild(sq);
    }
}

let v = squares(30);




