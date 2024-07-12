let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_game_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO = true; //showing playerO turn
let arr1 = [[1,2,3],[1,2,3],[4,5,6]];
let times = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((boxes)=> {
    boxes.addEventListener("click",()=>{
        console.log("Box is Clicked")
        if(turnO){
            boxes.innerText = "O";
            turnO = false;
        }
        else{
            boxes.innerText="X";
            turnO = true;
        }
        boxes.disabled = true;
        
        checkWinner();
        
    })
})

const resetGame = () => {
    console.log("reset game is called");
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `${winner} WINS`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos2Val!="" && pos3Val!="" && pos1Val!=""){
            if(pos2Val == pos1Val && pos2Val == pos3Val){
                showWinner(pos1Val);
                break;
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);