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
                                <span onClick={() => {
                                    setFlag(!flag);
                                    // flag ? setFlag(false) : setFlag(true);
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

            <div>
                {
                    flag && <Modal />
                }
            </div>

            <button onClick={() => {
                news.splice(0, 1, 'Today news');
                let temp = [...news];
                setNews(temp);

                // let temp = [...news];
                // temp[0] = 'Today news';
                // setNews(temp);

                // setNews(['Today news', '어제의 뉴스', '내일의 뉴스']);
            }}>제목 변경</button>

        </div>
    )
}

export default NewsBlog;