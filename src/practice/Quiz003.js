import { useState } from "react";
import './Quiz003.css';

function Quiz003() {

    let [boxes, setBoxes] = useState([]);

    let [arr, setArr] = useState([]);

    // for(let i=0; i<2; i++) {
    //     boxes.push(<div className="box"></div>);
    // }

    return(
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    // let temp = [...arr];
                    // temp.push(1);
                    // temp.unshift(0);
                    // let temp = [...arr, 1];
                    let temp = [0, ...arr];
                    setArr(temp);
                }}>추가</button>
            </div>

            {
                arr.map(()=>{
                    return <div className="box">박스</div>;
                })
            }
        </div>
    );

    /*
    return(
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    let temp = [...boxes];
                    temp.push(<div className="box">박스</div>);
                    setBoxes(temp);
                }}>추가</button>
            </div>
            {
                boxes
            }
        </div>
    );
    */

}

export default Quiz003;