import React, {useState} from 'react';
import "./ticTac.style.css"

const TicTac = () => {

    const boxes = [
        {
            id:0,
            clicked: false,
            value: ""
        },  {
            id:1,
            clicked: false,
            value: ""
        },  {
            id:2,
            clicked: false,
            value: ""
        },     {
            id:3,
            clicked: false,
            value: ""
        },  {
            id:4,
            clicked: false,
            value: ""
        },  {
            id:5,
            clicked: false,
            value: ""
        },     {
            id:6,
            clicked: false,
            value: ""
        },  {
            id:7,
            clicked: false,
            value: ""
        },  {
            id:8,
            clicked: false,
            value: ""
        }
    ]



const [turn, setTurn] = useState(0)
const [clicked,setClicked] = useState(false)
let playerX = []
let playerO = []

const checkAnswers = (userArr, answerArr)=>{
    let isWinner = false;
    for (let item of answerArr){
    isWinner =  item.every((el) => userArr.includes(el));
      if(isWinner){
        break;
      }
    }
      return isWinner;
    };

const gameBoard = boxes.map((el, index) => {
    return (
        <div className="tic-tac__box" onClick={()=>onClickHandler(el)} key={index}>{el.clicked && <p>{el.value}</p>}</div>)
})


const onClickHandler = (el) => {
    setClicked(true)
    setTurn(turn + 1)
    el.clicked = true
    if (turn % 2 === 0) {
        el.value = "x"
    } else {
        el.value = "o"
    }
    console.log(el)
    console.log(turn)
}

    return (
        <div>
            <p>Game</p>
            <div className='game__grid'>
                {gameBoard}
            </div>
        </div>
    );
}

export default TicTac;
