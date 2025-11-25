import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CardData = [
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_2.jpg.webp",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_3.jpg",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_5.jpg",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:1,
        image:"https://preview.colorlib.com/theme/magdesign/images/img_6.jpg",
        title:"Business, Travel ", 
        text:"Your most unhappy customers are your greatest source of learning.", 
        deccription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
   
    
]

function BasicExample() {   
  return (
        <>
            <Container className='mt-5 pt-5'>
                <Row className='g-4'>
                    {CardData.map((c) => {
                        return(
                            <Col md={4} key={c.id}>
                                <Image src={c.image} rounded style={{objectFit:"cover", width:"350px"}}></Image>
                                <h6 className='fw-bold pt-3'>{c.title}</h6>
                                <h5 className='mb-3'>{c.text}</h5>
                                <p style={{color:"gray"}}>{c.deccription}</p>  
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
  );
}

export default BasicExample;