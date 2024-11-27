import './Practice002.css';
import { useState } from "react";
import ColorBox from './ColorBox';

function Practice002() {

    /*
    앞    삭제 shift  추가 unshift
    뒤    삭제 pop    추가 push
    */
    // let [boxes, setBoxes] = useState(['black']);

    // let [boxes, setBoxes] = useState(
    //     [<div className="box bg-red"></div>,
    //     <div className="box bg-blue"></div>,
    //     <div className="box bg-green"></div>,
    //     <div className="box bg-black"></div>]
    // );

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
            boxes.map((value)=>{
                return <ColorBox bgColor={value}/>
            })
        }

    </div>
    )

/*
    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box bg-red">박스</div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { }}>앞파란박스추가</button>
                <button onClick={() => { }}>앞초록박스추가</button>

                <button onClick={() => { }}>뒤빨간박스추가</button>
                <button onClick={() => { }}>뒤파란박스추가</button>
                <button onClick={() => { }}>뒤초록박스추가</button>

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
                boxes
            }
        </div>
    )
*/

    /*
    return (
        <div>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(1);
                setBoxes(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => { }}>앞파란박스추가</button>
            <button onClick={() => { }}>앞초록박스추가</button>

            <button onClick={() => { }}>뒤빨간박스추가</button>
            <button onClick={() => { }}>뒤파란박스추가</button>
            <button onClick={() => { }}>뒤초록박스추가</button>
            <br></br>
            <div style={{width: '100px', height: '100px', backgroundColor:{boxes}}}></div>

            {
                boxes.map((item, index)=>{
                    return <div style={{width: '100px', height: '100px', backgroundColor:{item}}} className="box"></div>;
                })
            }
        </div>

    )
    */
}

export default Practice002;