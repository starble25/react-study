import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodCard from '../components/FoodCard';
import banner_bg from '../image/banner_bg.jpg';

function Home( {foods} ) {

    return (
        <div>
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>
            {/* <div className='main-bg' style={{ backgroundImage: 'url(../image/banner_bg.jpg)' }}></div> */}

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={2} key={index}>
                                    <FoodCard food={food} foods={foods} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )

}

export default Home;