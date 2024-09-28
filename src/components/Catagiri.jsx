import './catagiri.css';
import {Container,Col,Row} from 'react-bootstrap'

function Catagiri(){
    return(
        <div className='main-container'>
            <Container className='catagiri-container'>
                <h2 className='catagiri-heading'>CATAGIRI</h2>
            <Row>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725357641/SNM/image_aqfi6i.png'alt="img"></img>
                    <h3 className='catagiri-item-title' >Women</h3>
                </Col>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725357641/SNM/Women_2_pqbcqx.png'alt="img"></img>
                    <h3 className='catagiri-item-title' >Men</h3>
                </Col>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725363599/SNM/brunette-woman-kitchen_23-2148173200.jpg_ic4krm.jpg'alt="img"></img>
                    <h3 className='catagiri-item-title' >Kechen</h3>
                </Col>
                <Col xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725364086/SNM/comfortable-modern-chair-isolated_176382-1216_sqvrux.avif'alt="img"></img>
                    <h3 className='catagiri-item-title' >Fofa's</h3>
                </Col>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725364090/SNM/hand-drawn-flat-design-stack-books-illustration_23-2149341898_hkozyq.avif'alt="img"></img>
                    <h3 className='catagiri-item-title' >Books</h3>
                </Col>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725364087/SNM/view-3d-laptop-device-with-screen-keyboard_23-2150714001_ahumrs.avif'alt="img"></img>
                    <h3 className='catagiri-item-title' >Electronics</h3>
                </Col>
                <Col  xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725364087/SNM/view-3d-car_23-2150796894_f46ira.avif'alt="img"></img>
                    <h3 className='catagiri-item-title' >Vehicles</h3>
                </Col>
                <Col xs={7} md={4} lg={3} className='item'>
                    <img className='catagiri-item-img' src='https://res.cloudinary.com/muni/image/upload/v1725364086/SNM/front-view-eco-friendly-cleaning-products-set-with-cotton-swabs-soap_23-2148818491_jtevsk.avif'alt="img"></img>
                    <h3 className='catagiri-item-title' >Others</h3>
                </Col>
            </Row>
        </Container>
     </div>
    )
}
export default Catagiri;

