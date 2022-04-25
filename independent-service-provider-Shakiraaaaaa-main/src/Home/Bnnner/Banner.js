import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Bnnner/Banner.css'

import wedding1 from '../../images/wedding1.jpeg';
import wedding2 from '../../images/wedding2.jpeg';
import wedding3 from '../../images/wedding3.jpeg'




const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-80 mx-auto"
                    src={wedding1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Wedding picture one</h3>
                    <p>Where there is love there is life</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-80 mx-auto"
                    src={wedding2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wedding picture two</h3>
                    <p>To be fully seen by somebody, then, and be loved anyhow–this is a human offering that can border on miraculous.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-80 mx-auto "
                    src={wedding3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Wedding picture three</h3>
                    <p>
                        If I get married, I want to be very married
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;