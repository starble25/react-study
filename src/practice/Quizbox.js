import './Quiz002.css';

function Quizbox( props ) {
// function Quizbox( {title, content} ) {

    return(
        <div>
            <p className='title'>제목 : {props.title}</p>
            <p className='textItem'>내용 : 내용{props.content}</p>
            {/* <p className='title'>제목 : {title}</p>
            <p className='textItem'>내용 : 내용{content}</p> */}
        </div>
    );

}

export default Quizbox;