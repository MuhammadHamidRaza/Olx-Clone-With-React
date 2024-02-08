import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import ControlledCarousel from "./slider/index";
import Profile from "./profile";
import './style.css'
import { auth, getSingleProduct } from "../../config/firebase";
import { getUsers } from "../../config/firebase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Fotter";
import loading from '../../components/loading.mp4'

function Detail() {

    const params = useParams();
    const [product, setProduct] = useState({});
    const [name, setName] = useState(null);

    useEffect(() => {
        getAds();
    }, []);

    const { adId } = params;

    async function getAds() {
        try {
            const res = await getSingleProduct(adId)
            //   console.log(res)
            console.log(res.uid)
            setProduct(res)
            const users = await getUsers(res.uid)
            setName(users.name)
        }
        catch (e) {
            // alert("Error: Product not found" + e)
        }
    }


    return (
        <div>
            
            {product && product.image && <Navbar />}
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className="con">
                {product && product.image && (
                    <div className='sliders-image'>
                        <ControlledCarousel images={product.image} />
                    </div>
                )}

                {product && product.image && (
                    <div>
                        <Profile product={product} adId={adId} name={name} />
                    </div>
                )}
            </div>

            {product && product.image && (
                <div className="proRate">
                    <div>
                        <h1>RS {product.amount}</h1>
                    </div>
                    <div>
                        <h4>{product.title}</h4>
                    </div>
                    <div>
                        <p>Faiz Town, Multan</p>
                    </div>
                </div>
            )}

            {product && product.image && (
                <div className="proRate">
                    <div>
                        <h1>Description</h1>
                    </div>
                    <div>
                        <p>{product.description}</p>
                    </div>
                </div>
            )}

            {product && product.image && <Footer />}


            {!product || !product.image && (
                <video style={{ height: '100vh', width: '100vw' }} autoPlay muted>
                    <source src={loading} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            
        </div>
    );
}

export default Detail;
