import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';

import foodsData from '../data/foodsData';
import { useState } from 'react';

import { Routes, Route, Link, useNavigate} from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate();   // 경로 조작 함수

    // navigate("/detail");
    // a href = "/detail";
    // location.href = "/detail";

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/detail") }}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate("/info") }}>Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
            1. css 이미지 경로
            2. js에서는 import 후 사용
            <img src={banner_bg}/>

            3. public 폴더에 저장 후 사용
            img src={process.env.PUBLIC_URL + '/food1.jpg'}

            package.json
            "homepage":"/new url path"    상세경로

            +++
                '/image/food1.jpg'
                {페이지주소경로/image/food2.jpg
                localhost:3000/image/food2.jpg
             */}

            <Routes>
                <Route path="/" element={<Home foods={foods}/>} />
                <Route path="/info" element={<h1>info page</h1>} />
                {/* <Route path="/detail/:index" element={ <Detail foods={foods}/> } /> */}
                <Route path="/detail/:id" element={ <Detail foods={foods}/> } />
                <Route path="*" element={<div>찾을 수 없습니다.</div>}/>
            </Routes>

            {/* <Container>
                <Row>
                    {
                        foods.map((item, index)=>{
                            return (
                                <FoodCard foods={foods} index={index}/>
                            )
                        })
                    }
                </Row>
            </Container> */}

            {/* 
            <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food1.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content}</Card.Text>
                                <Card.Text>{foods[0].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food2.jpg'} />

                            <Card.Body>
                                <Card.Title>{foods[1].title}</Card.Title>
                                <Card.Text>{foods[1].content}</Card.Text>
                                <Card.Text>{foods[1].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={8}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food3.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[2].title}</Card.Title>
                                <Card.Text>{foods[2].content}</Card.Text>
                                <Card.Text>{foods[2].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            */}

        </div>
    );

}

export default FoodMarket;