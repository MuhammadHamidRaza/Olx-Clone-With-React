import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth,myAdd } from '../../../config/firebase';
import './style.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Fotter';
import loading from '../../../components/loading.mp4'


function MyAdsComponent() {
    const [userAds, setUserAds] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
              
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const uid = user.uid;
                        console.log(uid);
                     
                        const ads = await myAdd(uid)
                        setUserAds(ads);
                    
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {userAds.length >= 1 ? (
                <div>
                    <Navbar />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='Container'>
                        {userAds.map((ad) => (
                            ad.image && <div className="cardss" onClick={() => navigate('/detail/'+ ad.id)}>
                                <img src={ad.image} style={{ width: '100%', height: '200px' }} className="images" />
                                <h3 style={{ textAlign: 'center', background: 'white' }}>{ad.title}</h3>
                                <h4 style={{ textAlign: 'center', background: 'red' }}>Rs. {ad.amount}</h4>
                                <button style={{width: '50%'}}>Edit</button>
                                <button style={{width: '50%'}}>Delete</button>
                            </div>
                        
                        ))}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <Footer />
                </div>
            ) : (
                <video style={{ height: '100vh', width: '100vw' }} autoPlay muted>
                <source src={loading} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            )}
        </div>
    );
    
}

export default MyAdsComponent;
