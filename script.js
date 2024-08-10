let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let turnO =true;
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>{
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
     box.addEventListener('click',() =>{
        if (turnO){
            box.innerHTML= "O";
            turnO= false;
        }else
        {
           box.innerHTML= "X";
           turnO= true;
        }
           box.disabled= true;
           checkWinner();
     });
});
const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};
    const enableBoxes= ()=>{
        for(let box of boxes){
            box.disabled= false;
            box.innerHTML="";
        }
};
const showWinner = (winner) =>{
    msg.innerHTML= `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
     /* console.log(pattern[0],pattern[1],pattern[2]);
       console.log(
          boxes[pattern[0]].innerHTML,
          boxes[pattern[1]].innerHTML,
           boxes[pattern[2]].innerHTML
      ); */
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            } 
            
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);