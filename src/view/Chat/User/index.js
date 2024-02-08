import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
import './style.css'

library.add(faArrowLeft);

function User({product,name}) {
    var img = 'https://images.olx.com.pk/thumbnails/372729508-400x300.webp';

    console.log(product)
    console.log(name)

    return (
        <div className="bo">
            <ul>
                <li className='ic'>
                    <FontAwesomeIcon icon="arrow-left" style={{ width: '100%', height: '6vh' }} />
                </li>

                <li>
                    <img style={{ width: 50, height: 50, borderRadius: 30 }} src={img} />
                    <span className='text-justify'> &nbsp; &nbsp;{name}</span>
                </li>
                <li style={{right: '17%', position: 'absolute'}}>
                    <FontAwesomeIcon style={{ width: '100%', height: '6vh' }} icon={faPhone} />

                </li>
                <li style={{right: '2%', position: 'absolute'}}>
                    <FontAwesomeIcon style={{ width: '100%', height: '6vh' }} icon={faMessage} />

                </li>
            </ul>
        </div>
    );
}

export default User;
