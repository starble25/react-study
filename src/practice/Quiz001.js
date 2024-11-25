import './Quiz001.css';
import Even01 from './components/Even01';
import {useState} from "react";

export default App;

function Quiz001() {

  let [count, setCount] = useState(0);
  
  return(
  <div>
    <button onClick={()=>{
      console.log('버튼 눌림');
      setCount(count + 2);
      console.log(count);
    }}>짝수출력</button>
    <span className='font-red' style={{color:'red'}}>{count}</span>
  </div>
  )

}