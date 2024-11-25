import logo from '../logo.svg';
import { useState } from 'react';
import './Practice001.css';

function Practice001() {

    let textArr = ['하나', '둘', '셋'];
    let [cnt, setCnt] = useState(0);

    // let txtArr = ['하나', '둘', '셋'];
    // let [index, setIndex] = setState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {textArr[cnt]}
                    {/* {txtArr[index]} */}
                </p>
                <button onClick={()=>{
                    setCnt(cnt+1);
                    
                    if(cnt == 2) {
                        setCnt(0);
                    }

                    // setIndex( (index+1)%txtArr.length );

                    // let value = (index + 1) == 3 ? 0: (index);
                    // setIndex(value);

                    /*
                    index++;
                    if(index > 2){
                        index = 0;
                    }
                    setIndex(index);
                    */
                }}>변경버튼</button>
            </header>
        </div>
    );
}

export default Practice001;