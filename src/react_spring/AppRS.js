import { useState } from 'react';
import './AppRS.css';
import axios from 'axios';
import DrinkItem from './DrinkItem';

function AppRS() {

    // let [drinkList, setDrinkList] = useState([]);
    let [drinkList, setDrinkList] = useState([ {item:'아이스티', type:'차'} ]);
    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] = useState(0);

    return (
        <div>
            <h1>AppRS</h1>
            <div>
                <button onClick={()=>{
                    //axios.get('http://localhost:8080/api/getMsg')
                    // '/api/getMsg'
                    // :3000(client) <-> :3000(node.js) [proxy:8080] <-> :8080(spring)

                    //package.json에 proxy 설정 추가
                    //react FE 에서 요청할떄는 3000포트로 요청하듯이 경로 작성
                    //spring 서버에 해당 api 요청 경로를 처리하는 url 주소 맵핑
                    axios.get('/api/getMsg')
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }}>데이터 요청 get</button>
            </div>
            <br/>

            <div>
                <button onClick={()=>{
                    axios.get('/api/getDrinks')
                    .then( response => {
                        console.log(response.data);
                        let temp = [...drinkList, ...response.data];
                        setDrinkList(temp);

                        // let temp2 = [...drinkList];
                        // response.data.map((item)=>{
                        //     temp2.push(item);
                        // })
                        // setDrinkList(temp2);
                    })
                    .catch( error => {
                        console.log(error);
                    })
                }}>데이터 요청 Drinks</button>
            </div>
            <br/>

            <div>
                <button onClick={()=>{

                    let paramType = '';
                    if( typeFlag ) {
                        paramType = '커피';
                        setTypeFlag(!typeFlag);
                    } else {
                        paramType = '탄산음료';
                        setTypeFlag(!typeFlag);
                    }
                    axios.get('/api/getDrinksDiv?type=' + paramType)
                    .then( response => {
                        console.log(response.data);
                        setDrinkList(prevDrinkList => [...prevDrinkList, ...response.data]);
                        // let temp = [...drinkList, ...response.data];
                        // setDrinkList(temp);
                    })
                    .catch( error => {
                        console.log(error);
                    })
                }}>데이터 요청 Drinks 구분요청</button>
            </div>
            <br/>

            <div>
                <button onClick={()=>{
                    //axios.post('/api/getDrinkItem', { item:'na', type:'coffee' })
                    setNum(num + 1);
                    axios.post('/api/getDrinksNum',
                        String(num),
                        {
                            headers: {
                                //'Content-Type':'text/plain'
                                'Content-Type':'application/json'
                            }
                        }
                    )
                    .then( response => {
                        console.log(response.data);
                        setDrinkList(prevDrinkList => [...prevDrinkList, ...response.data]);
                    })
                    .catch( error => { console.log(error) })
                }}>데이터 요청 post</button>
            </div>

            <hr/>
            {
                drinkList.map((item)=>{
                    return <DrinkItem drinkItem={item}/>;
                })
            }
            
        </div>
    );

}

// npm install axios 설치

// 리덕스 관련 라이브러리 설치
// npm install @reduxjs/toolkit
// npm install react-redux

export default AppRS;