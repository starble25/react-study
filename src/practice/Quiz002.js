import './Quiz002.css';
import Quizbox from './Quizbox';
import { useState } from 'react';

function Quiz002() {

  let titleArr = ['하나', '둘', '셋', '넷', '다섯'];
  let contentArr = ['하나', '둘', '셋', '넷', '다섯'];

  return (
    <div>
      {
        titleArr.map((item, index)=>{
          return <Quizbox title={titleArr[index]} content={contentArr[index]}/>
          // return <Quizbox title={item}/>
        })
      }
      
      {/* 
      <Quizbox title={titleArr[0]} content={contentArr[0]}/>
      <Quizbox title={titleArr[1]} content={contentArr[1]}/>
      <Quizbox title={titleArr[2]} content={contentArr[2]}/>
      <Quizbox title={titleArr[3]} content={contentArr[3]}/>
      <Quizbox title={titleArr[4]} content={contentArr[4]}/>
      */}
    </div>
  );
}

export default Quiz002;
