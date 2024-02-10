import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, postAdToDb } from '../../../config/firebase'; 
import './style.css';

function Sell() {
    const [category , setCategory] = useState()
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [location ,setLocation] = useState({})

    function onFileChange(event) {
        const selectedFiles = event.target.files;
        setImages([...selectedFiles]);
    }
    useEffect(()=>{
        console.log(category);

    },[category])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            const { latitude, longitude } = location.coords
            console.log(location);
            setLocation({ latitude, longitude })
        })
    }, []) 
    function onSubmit() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const uid = user.uid;

                    const allInputs = document.getElementsByClassName('inpt');
                    const title = allInputs[0];
                    const description = allInputs[1];
                    const amount = allInputs[2];
                    const address = allInputs[3]


                    const ad = {
                        title: title.value,
                        description: description.value,
                        amount: amount.value,
                        address:address.value,

                        image:images,
                        location:{latitude:location.latitude,longitude:location.longitude},
                        category,
                        uid
                    };
                  
                  await  postAdToDb(ad);
                  setImages([]);
                  address.value = '';
                  title.value = '';
                  description.value = '';
                  amount.value = '';
                  location.value =''
                  setCategory('')

                } catch (e) {
                    alert(e);
                }
            } else {
                console.error('User or user name is undefined');
            }
        });
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            }
        });
    }

    return (
        <div className='body'>
            <div className="Cont">
                <h3 className='h3'>Post Ad Form</h3>

                <input className='inpt' placeholder="Title" />
                <input className='inpt' placeholder="Description" />
                <input className='inpt' type="number" placeholder="Amount" />
                <input className='inpt' placeholder="Address" />
                <h2 className='btns'>Category</h2>
                <div className='btns'>

                    <ul style={{display:'flex',listStyle:'none'}}>
                    <li>bedsheet<input onClick={() => setCategory('bedsheet')}  name='category' placeholder='bedsheet' type='radio'/></li>
                    <li>tv<input onClick={() => setCategory('tv')} name='category' placeholder='tv' type='radio' /></li>

                    <li>home<input onClick={() => setCategory('home')} name='category' placeholder='home' type='radio'/></li>
                    <li>Bike<input onClick={() => setCategory('bike')} name='category' placeholder='Bike' type='radio'/></li>
                    <li>car<input onClick={() => setCategory('car')} name='category' placeholder='car' type='radio'/></li>
                    </ul>
                </div>



                <input
                
                    className='inpt image-input'
                    type="file"
                    multiple
                    onChange={onFileChange}
                />

                <button className='button' onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Sell;
