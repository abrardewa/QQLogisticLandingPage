import {ReactComponent as Logo} from './Assets/QQlogistic.svg';
import {ReactComponent as Animasi} from './Assets/paket.svg';
import React, { useState, useEffect } from "react";
import payment from "./Assets/payment.svg";
import time from "./Assets/time.svg";
import scales from './Assets/timbangan.svg';
import wa from './Assets/wa.svg';
import fb from './Assets/fb.svg';
import ig from './Assets/ig.svg';
import pin from './Assets/pin.svg';
import './App.css';
import './styleHome.css';
import { Button,Container, Navbar, ListGroup, Form,Nav, NavDropdown,Row,Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Collapse } from 'bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(false);
  //button login scroll when active
  const [loginbtn, setLoginbtn]= useState(false);
  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo(true);
    } else {
      setNavbarLogo(false);
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })
  const changeLoginbtn = () => {
    if (window.scrollY >= 60) {
      setLoginbtn(true);
    } else {
      setLoginbtn(false);
    }
  }

  useEffect(() => {
    changeLoginbtn()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLoginbtn)
  })
  const url="http://localhost:3000/";

  return (
    <div className="App">
      <Navbar className={navbar? "navbarScrolled" : "Navbar"} sticky='top' expand="lg">
        <Container>
          <Navbar.Brand>
            <Logo className={navbarLogo?"scrolledLogo":"Logo"} style={{ width:'150px' }}/>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className='Midmenu' style={{ width:"100%" }}>
              <Nav.Item><Nav.Link className='Aktif Home' href="/home">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link className='Nonaktif'>Pick Up</Nav.Link></Nav.Item>
              <Nav.Item><NavDropdown className='Dropdown1' show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title={<span className="Dropdown2">Search</span>} id="collasible-nav-dropdown2">
                <NavDropdown.Item className='Nonaktif'>Trace & Track</NavDropdown.Item>
                <NavDropdown.Item className='Nonaktif'>Shipping Rates</NavDropdown.Item>
                <NavDropdown.Item className='Nonaktif'>Find Drop Point</NavDropdown.Item>
              </NavDropdown></Nav.Item>
              <Nav.Item><Nav.Link className='Nonaktif'>About Us</Nav.Link></Nav.Item>
            </Nav>
            <Nav className=" Login">
              <Nav.Link className={loginbtn ? " scrolledLoginBtn rounded-pill" : " loginBtn rounded-pill"}>Login/Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='Upper'>
        <Container className='UpperContainer'>
          <Card className='Card'>
            <Card.Body className='CardBody'>
              <h2 className='Title'>Pengiriman<span className='span'> Kamu Aman, Lacak Disini</span></h2>
              <Card.Text className='text-muted' style={{ marginTop:"50px"}}>
                Masukkan Nomor Resi Pengiriman Kamu.
              </Card.Text>
              <Form >
                <Form.Group className="mb-3 Content" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Nomor Resi" />
                  <Form.Text className="text-muted">
                    Masukkan 10 Digit Nomor Resi Kamu dan Klik Tombol Lacak Untuk Mengetahui Posisi Pengiriman Kamu
                  </Form.Text>
                </Form.Group>
                <Button className='Button' variant='danger' type="submit">
                  Lacak
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <div className='Middle'>
        <Container className='MiddleContainer'>
            <Row className='RowMid'>
              <Col className='ColMid'>
                <Card className='Card'>
                  <Card.Body>
                  <Card.Img className='CardPict' variant="top" src={payment} />
                    <Card.Title>Pembayaran Mudah</Card.Title>
                    <Card.Text>
                      Pembayaran di dukung dengan e-payment
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='ColMid'>
                <Card className='Card'>
                  <Card.Body>
                  <Card.Img className='CardPict' variant="top" src={time} />
                    <Card.Title>20 Jam Pengantaran</Card.Title>
                    <Card.Text>
                      Paket kamu akan sampai 20 jam di tempat tujuan tanpa ada biaya tambahan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='ColMid'>
                <Card className='Card'>
                  <Card.Body>
                  <Card.Img className='CardPict' variant="top" src={scales} />
                    <Card.Title>Timbangan Akurat</Card.Title>
                    <Card.Text>
                      Berat paket kamu akan ditimbang dengan akurat dengan timbangan digital.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>

      </div>
      <div className='End'>
        <Container className='EndContainer'>
          <Row className='RowEnd'>
              <Col className='ColEnd'>
                <div className='Isi'>
                  Informasi
                </div>
                <ul className='BungkusList'style={{ justifyContent:"start" }}>
                  <li className='List'><a className='isiList'>FAQ</a></li>
                  <li className='List'><a className='isiList'>Term & Condition</a></li>
                  <li className='List'><a className='isiList'>Privacy Policy</a></li>
                </ul>
              </Col>
              <Col className='ColEnd'>
                <div className='Isi'>
                  Kontak
                </div>
                <table>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={wa}/>
                    </td>
                    <td className='ColTable'>
                      Whatsapp
                    </td>
                  </tr>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={ig}/>
                    </td>
                    <td className='ColTable'>
                      Instagram
                    </td>
                  </tr>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={fb}/>
                    </td>
                    <td className='ColTable'>
                      Facebook
                    </td>
                  </tr>
                </table>
              </Col>
              <Col className='ColEnd'>
                <div className='Isi'>
                  Lokasi
                </div>
                <table>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={pin}/>
                    </td>
                    <td className='ColTable'>
                      Medan
                    </td>
                  </tr>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={pin}/>
                    </td>
                    <td className='ColTable'>
                      Jakarta
                    </td>
                  </tr>
                  <tr className='RowTable'>
                    <td className='ColTable'>
                      <img className='Pict' src={pin}/>
                    </td>
                    <td className='ColTable'>
                      Surabaya
                    </td>
                  </tr>
                </table>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
    
  );
}

export default App;
