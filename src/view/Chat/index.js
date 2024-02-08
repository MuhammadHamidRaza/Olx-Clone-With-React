// Chating.js
import './style.css';
import User from './User';
import Title from './Title';
import Page from './Page';
import Bottom from './Btm';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSingleProduct,getUsers } from '../../config/firebase';


function Chating() {
    const params = useParams();

    const [chat, setChat] = useState([]);

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


    function sendMessage(message) {
        setChat((prevChat) => [...prevChat, message]);
    }

    return (
        <div>
            <div className="bod">
                <User name={name != null && name} product={product} />
                <Title product={product} />
                <Page chat={chat} />
                <Bottom onSendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chating;
