import React from 'react';
import './Contact.css';
import Logo from '../images/WTFlogo.jpeg';
import InstagramLogo from '../images/instagramlogo.png';
import YoutubeLogo from '../images/youtube.svg';
import SoundcloudLogo from '../images/soundcloud-svgrepo-com.svg';

function Contact () {
    return (
        <div className='contact-section' id='contact'>
            <div className='hide-fade-in'>
                <img src = {Logo} alt='Logo' className='wtflogo' />
                <div className='contact-row'>
                    <div className='contact-info'>
                        <h2>Contact</h2>
                        <p className='email'>Email: wtfib.collab@gmail.com</p>
                        <p className='socials'>Follow me on social media!</p>
                    </div>
                    <div className='social-icons'>
                        <a href='https://www.instagram.com/prodby.wtfib/' target='_blank' rel='noreferrer'>
                            <img src={InstagramLogo} alt='Instagram' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCeMH7DuNOvzEviLDmyoyNFw' target='_blank' rel='noreferrer'>
                            <img src={YoutubeLogo} alt='Youtube' />
                        </a>
                        <a href='https://soundcloud.com/whothefuckisbilly' target='_blank' rel='noreferrer'>
                            <img src={SoundcloudLogo} alt='Soundcloud' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
