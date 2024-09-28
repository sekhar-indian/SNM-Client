// import './banner.css'
// function Banner(){
//     return (
//         <div className='banner-container'>
//             <div className='banner-img-container'>
//              <img className="banner-img" src="https://res.cloudinary.com/muni/image/upload/v1725355338/SNM/123-456-7890_3_h38nfb.png"></img>
//             </div>
//         </div>
//     )
// }
// export default Banner;

import './banner.css'
import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  return (
    <Carousel className="banner-container">
      <Carousel.Item>
        <img
          className=" banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1725355338/SNM/123-456-7890_3_h38nfb.png" // Replace with your image source
          alt="" // Replace with your alt text
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1725543417/SNM/123-456-7890_4_bzbsw9.png" // Replace with your image source
          alt="" // Replace with your alt text
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-img d-block w-100"
          src="https://res.cloudinary.com/muni/image/upload/v1725543848/SNM/123-456-7890_5_wceoqm.png" // Replace with your image source
          alt="..." // Replace with your alt text
        />
        <Carousel.Caption>
          <h5></h5> {/* Replace with your heading */}
          <p></p> {/* Replace with your paragraph */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
