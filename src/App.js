import logo from './logo.svg';
import * as ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail';

function App() {

 let [shoes] = useState(data)
 let navigate= useNavigate();
 
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        {/* <Link to='/'>Home</Link>
        <Link to='/detail'>상세페이지</Link> */}
    
      <Routes>
        <Route path='/' element={
        <>
        <div className='main-bg' ></div>
            <div className='container'>
              <div className='row'>
                  
                  {/* <Card shoes={shoes[1]} i={2}></Card>
                  <Card shoes={shoes[2]} i={3}></Card> */}

                  {
                    shoes.map( (a,i)=>{
                      return(
                        <Card shoes={shoes[i]} i={i}></Card>
                      )

                    })
                  }

                {/* <div className='col-md-4'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
                    <h4>{shoes[0].title}</h4>
                    <p>{shoes[0].price}</p>
                </div>
                <div className='col-md-4'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
                    <h4>{shoes[1].title}</h4>
                    <p>{shoes[1].price}</p>
                </div>
                <div className='col-md-4'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
                    <h4>{shoes[2].title}</h4>
                    <p>{shoes[2  ].price}</p>
                </div> */}
              </div>
            </div>   
      </>
        }/>
        <Route path='/detail' element={<Detail/>}/>

        <Route path='/about' element={<About/>}>
           <Route path='member' element={<div>member</div>}/>
           <Route path='location' element={<div>locaition</div>}/>
        </Route>


        <Route path='*' element={<div>없는 페이지요</div>}/>
     </Routes>     
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card (props) {
  return(
    <div className='col-md-4'>
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width='80%'/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
 </div>
  )
}
export default App;
