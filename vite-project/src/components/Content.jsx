import Container from 'react-bootstrap/Container';

function logo () {
    return(
        <Container>
            <div className='m-auto'>
                    <div className='text-center '>
                        <a href="" className='text-decoration-none text-dark fs-5 p-2 me-3' style={{backgroundColor:"#ccc", borderRadius:"17px" }}><i class="ri-facebook-fill"></i></a>
                        <a href="" className='text-decoration-none text-dark fs-5 p-2 me-3' style={{backgroundColor:"#ccc", borderRadius:"17px" }}><i class="ri-twitter-fill"></i></a>
                        <a href="" className='text-decoration-none text-dark fs-5 p-2 me-3' style={{backgroundColor:"#ccc", borderRadius:"17px" }}><i class="ri-whatsapp-fill"></i></a>
                        <a href="" className='text-decoration-none text-dark fs-5 p-2 me-3' style={{backgroundColor:"#ccc", borderRadius:"17px" }}><i class="ri-youtube-fill"></i></a>
                    </div>
                    <div className='text-center'>
                        <p className='pt-5' style={{color:"#777"}} >Copyright ©2025 All rights reserved | This template is made with  by KB_02</p>
                    </div>
                    <div className='text-center'>
                        <p className='pt-2 ' style={{color:"#777"}}>Terms & Conditions/ Privacy Policy</p>   
                    </div>
            </div>
        </Container>
    )
}

export default logo;