import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FoodCard( props ) {

    return (
        <Col md={4} sm={2}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + props.foods[props.index].imgPath} />
                <Card.Body>
                    <Card.Title>{props.foods[props.index].title}</Card.Title>
                    <Card.Text>{props.foods[props.index].content}</Card.Text>
                    <Card.Text>{props.foods[props.index].price}</Card.Text>
                    <Button variant="primary">상세보기</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default FoodCard;