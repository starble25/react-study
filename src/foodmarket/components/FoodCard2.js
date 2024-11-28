import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// function FoodCard2( props ) {
function FoodCard( { food, foods, index } ) {

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
                <Card.Body>
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Text>{food.content}</Card.Text>
                    <Card.Text>{food.price}</Card.Text>
                    <Button variant="primary">상세보기</Button>
                </Card.Body>
            </Card>
    );
}

export default FoodCard;