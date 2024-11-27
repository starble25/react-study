import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //javascript 코드
    let title = 'React Study';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    // let [cnt, setCnt] = useState(0);
    let [count, setCount] = useState([0, 0, 0]);

    let [flag, setFlag] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedCount, setSelectedCount] = useState(0);
    let [inputText, setInputText] = useState('');

    // {
    //     textArr.map((item, index)=>{
    //         // return <Box text={item} detail={detailArr[index]}/>
    //         return <Box text={textArr[index]} detail={detailArr[index]}/>
    //     })
    // }

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: '20px' }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4>
                                <span onClick={() => {  // 제목 클릭
                                    setFlag(!flag);     // Modal On/Off 전환
                                    // flag ? setFlag(false) : setFlag(true);
                                    setSelectedTitle(item);
                                    setSelectedCount(count[index]);
                                }}>{item}</span>

                                <span onClick={() => {
                                    let temp = [...count];
                                    temp[index]++;
                                    setCount(temp);

                                    // count.splice(index, 1, count[index] + 1);
                                    // let temp = [...count];
                                    // setCount(temp);
                                }}>💚</span> {count[index]}
                            </h4>
                            <p>내용 무</p>

                            <button onClick={()=>{
                                let temp = [...news];
                                temp.splice(index, 1);
                                setNews(temp);

                                count.splice(index, 1);
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            {/* 
            <div className='post-list'>
                <h4>
                    <span onClick={()=>{
                        setFlag( !flag );
                        // flag ? setFlag(false) : setFlag(true);
                    }}>{news[0]}</span>
                    <span onClick={()=>{
                        setCnt(cnt + 1);
                    }}>🖤</span> {cnt}
                </h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>
                    {news[1]}
                </h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용 무</p>
            </div>
             */}


            <button onClick={() => {
                news.splice(0, 1, 'Today news');
                let temp = [...news];
                setNews(temp);

                // let temp = [...news];
                // temp[0] = 'Today news';
                // setNews(temp);

                // setNews(['Today news', '어제의 뉴스', '내일의 뉴스']);
            }}>제목 변경</button>

            <div>
                <input type='text' id='input_news' value={inputText} onChange={(event)=>{
                    // console.log(event);
                    // console.log(event.target.value);
                    setInputText(event.target.value);
                }}/>
                <button onClick={()=>{  // 발행버튼을 눌렀을 때
                    // 전제조건 : 양측에 있는 띄어쓰기는 제외(trim)

                    inputText = inputText.trim();       // 원본값 바꿈

                    // if( inputText.trim() == '' ) {   // 원본값 바꾸지 않음(비파괴)
                    // if( inputText == '' ) {
                    // if( inputText.length == 0 ) {
                    if( inputText.length == 0 
                        ||inputText == '' 
                        || inputText == null 
                        || inputText == undefined) {
                        alert('값을 입력하세요')
                        return;
                    }

                    console.log('a'+inputText);

                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);
                    // inputText.trim() == '' ? document.getElementById('input_news').focus() : setNews(temp);

                    setInputText('');

                    count.push(0);
                    /*
                    let temp2 = [...count];
                    temp2.push(0);
                    setCount(temp2);
                    */

                    //입력된 값 확인 -> news 배열에 추가 저장
                    /*
                    let title = document.getElementById('input_news').value;
                    console.log(title);
                    
                    let temp = [...news];
                    temp.push(title);
                    setNews(temp);

                    document.getElementById('input_news').value = '';
                    */
                }}>발행</button>
            </div>

            {
                flag && <Modal title={selectedTitle} count={selectedCount} news={news} setNews={setNews} bgColor={'lightgreen'}/>
                // flag == true ? <Modal news={news} setNews={setNews} bgColor={'lightgreen'} /> : null
            }

        </div>
    )
}

export default NewsBlog;