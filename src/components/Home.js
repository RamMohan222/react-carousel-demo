import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { useCookies } from 'react-cookie';

function MainCarousel() {
    const [index, setIndex] = useState(0);
    const [c, s, removeCookie] = useCookies(['name']);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const logout = () => {
        removeCookie('name');
        window.location.reload();
    }

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/one.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>First slide description!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/two.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Second slide description!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/three.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Third slide description!!!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="justify-content-center">
                <Col md="auto"><Button onClick={logout}>Logout</Button></Col>
            </Row>
        </>
    );
}

export default MainCarousel;