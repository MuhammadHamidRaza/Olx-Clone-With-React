import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, postAdToDb } from '../../../config/firebase'; 
import './style.css';

function Sell() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    function onFileChange(event) {
        const selectedFiles = event.target.files;
        setImages([...selectedFiles]);
    }
    

    function onSubmit() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const uid = user.uid;

                    const allInputs = document.getElementsByClassName('inpt');
                    const title = allInputs[0];
                    const description = allInputs[1];
                    const amount = allInputs[2];
                    const location = allInputs[3]


                    const ad = {
                        title: title.value,
                        description: description.value,
                        amount: amount.value,
                        image:images,
                        location:location.value,
                        uid
                    };
                  
                  await  postAdToDb(ad);
                  setImages([]);
                  title.value = '';
                  description.value = '';
                  amount.value = '';
                  location.value =''

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
                <input className='inpt' type='text' placeholder="location" />



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
