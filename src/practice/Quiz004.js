import './Practice002.css';
import { useState } from "react";
import ColorBox from './ColorBox';

function Quiz004() {

    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);

    return(
        <div>
            <div>
            <button onClick={() => {
                let temp = ['red', ...boxes];
                setBoxes(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('blue');
                setBoxes(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('green');
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes, 'red'];
                setBoxes(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes, 'blue'];
                setBoxes(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes, 'green'];
                setBoxes(temp);
            }}>뒤초록박스추가</button>

            <button onClick={()=>{
                let temp = [...boxes];
                temp.shift();
                setBoxes(temp);
            }}>앞 박스 삭제</button>
            <button onClick={()=>{
                let temp = [...boxes];
                temp.pop();
                setBoxes(temp);
            }}>뒤 박스 삭제</button>
        </div>

        {
            boxes.map((value, index)=>{
                return <ColorBox bgColor={value} idx={index} boxes={boxes} setBoxes={setBoxes}/>
            })
        }

    </div>
    )
}

export default Quiz004;