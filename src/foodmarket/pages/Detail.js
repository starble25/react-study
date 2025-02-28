import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Detail.css';

function Detail({ foods }) {

    // let {index} = useParams();
    let { id } = useParams();

    let [orderCount, setOrderCount] = useState[0];
    const [smShow, setSmShow] = useState(true);

    let [viewStatus, setViewStatus] = useState('');

    useEffect(()=>{
        setViewStatus('end');
    }, []);

    // useEffect(실행할 함수, 의존성 배열)
    // useEffect(실행할 함수{return ()={clean up function}, 의존성배열})
    useEffect(() => {
        console.log('useEffect [] 실행');
    }, []); // 의존성 배열 비어있음 -> 로딩(mount)

    useEffect(() => {
        console.log('useEffect 실행');
    }); // 의존성 배열x -> 로딩(mount), 업데이트

    useEffect(() => {
        console.log('useEffect [orderCount] 실행');

        return () => {    //clean up function
            console.log('UseEffect [orderCount] return 실행');
        };
    }, [orderCount]);

    useEffect(()=>{
        //2초후 smShow 값을 false로 변경
        let tmout = setTimeout(()=>{
            setSmShow(false);
        }, 2000);

        //setTimeout
        //setInterval
        //비동기 처리

        //clearTimeout
        //clearInterval
        return ()=>{
            clearTimeout(tmout);
        }

    }, []);

    const redTextStyle = {
        color: 'red'
    };

    const blueTextStyle = {
        color: 'blue'
    };

    const styles = {
        // object -> key : value

        redStyle : {
            color: 'red'
        },
        blueSytle : {
            color: 'blue'
        },
        fontBigBOld : {
            fontSize:'2rem',
            fontWeight:'bold'
        }
    };



    let food = foods.find((item) => {
        return item.id == id;
    });

    // let index = foods.findIndex((item)=>{
    //     return item.id == id;
    // });

    if (food == undefined || food == null) {
        return (
            <div><h1>잘못된 접근입니다.</h1></div>
        )
    };

    /*
        조건에 따라서 다른 스타일을 적용
        가격표시
        1만원 이상 -> 빨간색
        1만원 미만 -> 파란색

        1) js 객체

        const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
        }

        <p style={priceTextStyle}>{food.price}</p>

        2) js 함수 형태

        const priceTextStyleFunc = (price)=>{
        return color: price >= 10000 ? 'red' : 'blue';
        }

        <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

        3) css 클래스 연계 활용

        //단일
        <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>

        //여러개
        <p className={'text-strong ' + food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>

        //join 함수
        <p className={
        ['text-strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")
        }>{food.price}</p>

        //백틱 문자 활용
        <p className={`text-strong ${food.price >= 10000 ? 'price-red' : 'price-blue'}`}>{food.price}</p>

        //변수 활용 (className에 활용)
        const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';
        <p className={'text-strong ' + priceClass}>{food.price}</p>

        4) css class = useState + useEfect 효과 적용

    */
    const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue';

    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }

    const priceTextStyleFunc = (price)=>{
        if(price >= 10000) {
            return { color : 'red' };
        } else {
            return { color : 'blue' };
        }

        // return {
        //     color: price >= 10000 ? 'red' : 'blue'
        // }
    }



    return (
        <Container className={"start" + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p style={styles.blueSytle}>{food.content}</p>
                    <p className={'text-strong ' + priceClass}>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={() => {
                            if (orderCount > 0)
                                setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        환영합니다~
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </Container>

    );
}

export default Detail;