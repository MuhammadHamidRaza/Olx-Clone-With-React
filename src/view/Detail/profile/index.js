import './style.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../store/cartSlice';
import Map from './map';
function Profile(props) {
    var navigate = useNavigate()
    var dispatch = useDispatch()


    var img = 'https://images.olx.com.pk/thumbnails/372729508-400x300.webp'
    return <div>
        <div className="Box-Profile">
            <div className="main-Box">
                <div className='Box-1'>

                    <div>
                        <img className='profile' src={img} />
                    </div>
                    <div>
                        <h1>{props.name}</h1>
                        <h5>Member since Jul 2020</h5>
                        <h3>See profile</h3>


                    </div>
                </div>
                <button className='phoneNumber'>Show Phone Number</button>

                <br />
                <button onClick={() => navigate('/chat/' + props.adId)} className='chat'>Chat</button>
                <button style={{ marginTop: 10 }} onClick={() => dispatch(updateCart(props.product))} className='phoneNumber'>Add To Cart</button>
            </div>
            <br />
            <div className='Box-2'>
                <h1 style={{ margin: 10 }}>Location</h1>
                <p style={{ marginLeft: 20 }}>{props.product.location}</p>

            </div>
            <Map location={props.product.location}/>
            <br />
            <div className='Box-3' >
                <span>Ad id 1081642770</span>
                <span><a href='#'><b>Report This ad</b></a></span>

            </div>
        </div>
    </div>
}
export default Profile;