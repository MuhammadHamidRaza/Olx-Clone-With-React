import './style.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUsers, signout } from '../../config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBuilding, faSearch, faCartShopping ,faXmark} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import olx from './olx.png';
import olx2 from './olx2.png';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';


const auth = getAuth();

function Navbar() {
    const [lvn, setLvn] = useState(false);
    const [name, setName] = useState(null);
    const [iscart,setIsCart] = useState(false) 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSelectChange =async (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === 'myAds') {
            navigate('/dashboard/myadd')
        } else if (selectedValue === 'logout') {
           await signout() 
           navigate('/login')
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const uid = user.uid;
                    const users = await getUsers(uid);

                    if (users && users.name) {
                        setName(users.name);
                        setLvn(true);
                    } else {
                        // Handle the case where users or users.name is undefined
                        console.error("Users or user name is undefined");
                    }
                } catch (error) {
                    // Handle any potential errors from getUsers
                    console.error("Error fetching user data:", error);
                }
            } else {

                setName(null);
                setLvn(false);
            }
        });

       
        return () => unsubscribe();
    }, []); 

    console.log('hello');
    const cart = useSelector(state => state.cart)
    function showCart() {
        setIsCart(true)
    }

    function close(){
        setIsCart(false)
    }
    function removeCart(index) {
      dispatch(removeFromCart(index))


    }

    return (
        <div className="Navbar">
            <div className="Nav1">
                <ul>
                    <li>
                        <img src={olx} alt="OLX Logo" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCar} /> Motors
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} /> Property
                    </li>
                    <li>
                    <FontAwesomeIcon onClick={showCart} icon={faCartShopping} /> {cart.length}
                    {iscart &&<div className='cart'>
                    <FontAwesomeIcon onClick={close} icon={faXmark} /> 
                      {cart.map((item,index) => {

                return <div>
                    <h3>
                        <img src={item.image[0]} width="100" height="50" /> {item.title} - Rs. {item.amount}      <Button onClick={() => removeCart(index)} style={{marginLeft:30}} variant="outline-danger">Remove</Button>{' '}

                    </h3>
                    
                </div>
            })}</div>}
                    </li>
                </ul>
            </div>
            <div className='Nav2'>
                <ul>
                    <li><img src={olx2} alt="OLX Logo" /></li>
                    <li className='address'><FontAwesomeIcon icon={faSearch} /><input className='pak' style={{ height: '100%' }} placeholder='Pakistan' /></li>
                    <li className='input-find'><input className='input' placeholder="Find Cars, Mobile Phones and more..." /><span className='searchIcon'><FontAwesomeIcon icon={faSearch} /></span></li>
                    <li className='nam'>
                        {!name ? (
                            <button onClick={() => navigate('/login')} className='login'>
                                Login
                            </button>
                        ) : (
                            <>
                                <h5 className='name'>{name}</h5>
                                <select style={{ width: 18 }} onChange={(e) => handleSelectChange(e)}>
                                    <option value=''><h5></h5></option>
                                    <option value='myAds'><h5>My Ads</h5></option>
                                    <option value='logout'><h5>Logout</h5></option>
                                </select>
                            </>
                        )}
                    </li>

                    <li><button onClick={() => navigate('/dashboard/sell')} className='Sell sell-btn-div'>Sell</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
