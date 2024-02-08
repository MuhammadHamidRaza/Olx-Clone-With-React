import { useEffect, useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import { getAllProducts } from '../../config/firebase';
import Navbar  from "../../components/Navbar";
import Footer from "../../components/Fotter";
import loading from '../../components/loading.mp4'
function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    const res = await getAllProducts()
    console.log('res', res)
    setProducts(res)
}

return (
  <>
    {products.length >= 1 ? (
      <>
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
        <div className="Container">
          {products.map((item) => {
            const { title, description, id, amount, image } = item;

            return (
              <div className="Card" onClick={() => navigate('detail/' + id)}>
                <div className="centainer">
                  <img src={image[0]} alt={title} />
                  <h2>Price: ${amount}</h2>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </>
    ) : (
      
        <video style={{ height: '100vh', width: '100vw' }} autoPlay muted>
            <source src={loading} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    
    )}
  </>
);

}

export default Dashboard;
