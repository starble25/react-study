import axios from "axios";
import { useState } from "react";

function Login() {

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <h1>React Spring Login</h1>
            
            id : <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }}></input> <br/>
            pw : <input type="password" onChange={(e)=>{
                setPw(e.target.value);
            }}></input> <br/>
            <button onClick={()=>{

                axios.post(
                    "/api/login",
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers:{
                            'Content-type':'application/json'
                        }
                    }
                )
                .then( response => {
                    console.log(response);
                    if( response.data === 'ok' ) { // 로그인 성공
                        
                    }
                })
                .catch( error => console.log(error) )

            }}>로그인</button> <br/>

            <button onClick={()=>{
                axios.post('/api/loginCheck')
                .then( response => {
                    console.log(response.data);
                })
                .catch( error => console.log(error) )
            }}>로그인여부체크</button>

            <button onClick={()=>{
                axios.post(
                    "/api/login",
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers:{
                            'Content-type':'application/json'
                        }
                    }
                )
                .then( response => {
                    console.log(response);
                    if( response.data === 'ok' ) { // 로그인 성공
                        
                    }
                })
                .catch( error => console.log(error) )

            }}>로그인</button> <br/>

            <button onClick={()=>{
                axios.post('/api/loginCheck')
                .then( response => {
                    console.log(response.data);
                })
                .catch( error => console.log(error) )
            }}>로그인여부체크</button>
            <br/>

            <button onClick={()=>{
                axios.post(
                    "/api/loginJWT",
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers:{
                            'Content-type':'application/json'
                        }
                    }
                )
                .then( response => {
                    console.log(response);  //로그인 성공
                    let accessToken = response.data;
                    // 다음에 API 요청할 때 사용할 수 있게 토큰은 localStorage 저장 해둔다
                    localStorage.setItem("accessToken", accessToken);
                    // 로그인 성공한 토큰 저장

                    // + 로그인 성공 시 해야하는 처리 (페이지 전환, 성공메시지...)
                })
                .catch( error => console.log(error) )

            }}>로그인JWT</button> <br/>

            <button onClick={()=>{

                console.log(localStorage.getItem("accessToken"));

                axios.post(
                    '/api/loginCheckJWT',
                    {
                        param1: "abc"
                    },
                    {
                        headers: {
                            "Content-Type" : "application/json",
                            "Authorization" : "Bearer " + localStorage.getItem("accessToken")
                        }
                    }
                )
                .then( response => {
                    console.log(response.data);
                    //후처리 -> 화면 갱신 state변수 설정 ....
                })
                .catch( error => console.log(error) )

            }}>로그인여부체크JWT</button>
        </div>
    );
}

export default Login;