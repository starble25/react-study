
function Modal( props ) {   // props : 부모 -> 자식 으로만 전달

    /*
    {
        bgColor: 'lightgreen',
        news: news배열,
        setNews: setNews 함수
    }
    */

    return (
        <div className="modal" style={ {backgroundColor:props.bgColor} }>
            <h3>제목</h3>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                let temp = [...props.news];
                temp[0] = '긴급 뉴스';
                props.setNews(temp);
            }}>제목 수정</button>
        </div>
    );
}

export default Modal;