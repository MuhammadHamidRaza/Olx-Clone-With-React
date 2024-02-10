import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../store/cartSlice';
import Map from './map';  // Assuming Map is a separate component
import './style.css';

function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = 'AIzaSyAWleTAMOPAcHeWptvRkOm_D20sjkOltHI'; // Replace with your actual API key

  const img = 'https://images.olx.com.pk/thumbnails/372729508-400x300.webp';

  const handleChatButtonClick = () => {
    navigate('/chat/' + props.adId);
  };

  const handleAddToCartButtonClick = () => {
    dispatch(updateCart(props.product));
  };
console.log(props.product.location);
  return (
    <div>
      <div className="Box-Profile">
        <div className="main-Box">
          <div className='Box-1'>
            <div>
              <img className='profile' src={img} alt="User Profile" />
            </div>
            <div>
              <h1>{props.name}</h1>
              <h5>Member since Jul 2020</h5>
              <h3>See profile</h3>
            </div>
          </div>
          <button className='phoneNumber'>Show Phone Number</button>
          <br />
          <button onClick={handleChatButtonClick} className='chat'>Chat</button>
          <button style={{ marginTop: 10 }} onClick={handleAddToCartButtonClick} className='phoneNumber'>Add To Cart</button>
        </div>
        <br />
        <div className='Box-2'>
          <h1 style={{ margin: 10 }}>Location</h1>
          <p style={{ marginLeft: 20 }}>{props.product.address}</p>
        </div>
      
        <Map address={props.product.location} apiKey={apiKey} />


        <br />
        <div className='Box-3'>
          <span>Ad id {props.adId}</span>
          <span><a href='#'><b>Report This ad</b></a></span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
