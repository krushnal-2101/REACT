import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import pic1 from '../image/pic1.webp';
import pic2 from '../image/pic2.webp';
import pic3 from '../image/pic3.webp';
import pic4 from '../image/pic4.webp';

function UncontrolledExample() {
    return (

        <Container className='m-auto mt-5'>
            <Carousel>
                <Carousel.Item>
                    <img className="w-100" src={pic1} alt="First slide" style={{objectFit:"cover", height:"800px"}}/>
                    <Carousel.Caption>
                        <h1 className='text-dark fw-bold'>Your most unhappy customers are your greatest source of learning.</h1>
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="w-100" src={pic2} alt="Second slide" style={{objectFit:"cover", height:"800px"}}/>
                    <Carousel.Caption>
                          <h1 className='text-dark fw-bold'>Your most unhappy customers are your greatest source of learning.</h1>
                      <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="w-100" src={pic3} alt="Third slide" style={{objectFit:"cover", height:"800px"}}/>
                    <Carousel.Caption>
                        <h1 className='text-dark fw-bold'>Your most unhappy customers are your greatest source of learning.</h1>
                       <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                     <Carousel.Item>
                    <img className="w-100" src={pic4} alt="Third slide" style={{objectFit:"cover", height:"800px"}}/>
                    <Carousel.Caption>
                        <h1 className='text-dark fw-bold'>Your most unhappy customers are your greatest source of learning.</h1>
                     <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
}

export default UncontrolledExample;