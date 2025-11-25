import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CardData = [
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_2.jpg.webp",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription: "Author, 26 published post"
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_3.jpg",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription:"Author, 26 published post"
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription: "Author, 26 published post"
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription:"Author, 26 published post"
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_5.jpg",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription: "Author, 26 published post"
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/magdesign/images/img_6.jpg",
        title: "Business, Travel ",
        text: "Your most unhappy customers are your greatest source of learning.",
        title2:"Sergy Campbell",
        deccription: "Author, 26 published post"
    },


]

function BasicExample() {
    return (
        <>
            <Container className='mt-5 pt-5'>
                <div className='d-flex justify-content-between  '>
                    <div className='mt-5'>
                        <h4 className='fw-bold mb-5'>Spotrs</h4>
                    </div>
                    <div className='m-auto mt-5'>
                        <h4 className='ps-5 fw-bold mb-5'>Business</h4>
                    </div>
                </div>
                <Row className='g-4'>
                    {CardData.map((c) => {
                        return (
                            <Col md={6} key={c.id}>
                                <div className='d-flex'>
                                    <div>
                                        <Image src={c.image} rounded style={{ objectFit: "cover", width: "150px", height:"100px" }} className='me-2'></Image>
                                    </div>
                                    <div>
                                        <h6 className='fw-bold '>{c.title}</h6>
                                        <h5>{c.text}</h5>
                                        <p style={{ color: "gray", fontSize:"15px"}}>  <p className='fw-bold' style={{ color: "black", fontSize:"15px"}}>{c.title2}</p>{c.deccription}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default BasicExample;