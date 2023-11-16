import {Container, Row, Col, Card, Button, ListGroup, Image, ListGroupItem} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'


function ProductScreen(){
    const {id} =useParams();
    const product = products.find(p=> p._id==id)
    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <div className="my-3 px-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} ></Rating>
                        </div>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                               <Button className='btn-block addToCardButton' type="button" disabled={product.countInStock == 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default ProductScreen;