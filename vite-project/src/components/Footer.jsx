import Container from 'react-bootstrap/Container';




function Subscribe() {
    return(

       <Container className='mt-5 p-5 '>
              <h3 className='fw-bold mt-5 pt-5'>Subscribe to newsletter</h3>
              <div className='d-flex'>
                <div >
                    <input type="text" placeholder='Enter Your Email' style={{width:"700px", margin:"10px 15px 50px 0px", padding:"10px", }} className='rounded'/>
                </div>
                <div>
                    <button style={{backgroundColor:"orange", margin:"10px 0px 0px 0px", padding:"14px 150px", color:"white", fontSize:"13px", borderRadius:"40px", border:"none" }} className='fw-bold '>SUBSCRIBE</button>
                </div>
              </div>
       </Container>
    )
}

export default Subscribe;