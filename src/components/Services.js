import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services' id='services'>
            <h2 className='services-title'>Services</h2>
            <div className='services-container hidden'>
                <div className='service service-mixing'>
                    <h3>Mixing</h3>
                    <p>
                        Where you can find some of the most professional
                        and balanced mixing on the market. Tailored to 
                        your music style, taking care of every aspect that
                        you want to pop out in your music.
                    </p>
                    <button className='subscribe-btn'>LEARN MORE</button>
                </div>
                <div className='service service-mastering'>
                    <h3>Mastering</h3>
                    <p>
                        Mastering enhances your final mix, ensuring it's
                        polished and ready for distribution. Applying 
                        advanced processing techniques, such as 
                        compression and limiting, to achieve a consistent 
                        and competitive sound.
                    </p>
                    <button className='subscribe-btn'>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
