import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { category } from "../../config/firebase";
import loading from '../../components/loading.mp4'
import Footer from "../../components/Fotter";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function Category() {
    const [products, setProducts] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getting();
    }, [name]);

    async function getting() {
        try {
            const ads = await category(name);
            setProducts(ads);
            console.log(ads);
        } catch (error) {
            console.error("Error fetching category:", error);
        }
    }

    // Render the fetched data
    return (
        <>
          {products.length >= 0 ? (
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
    {products.length === 0 ? (
        <div>
            <h1>Not Product</h1>
        </div>
    ) : (
        products.map((item) => {
            const { title, description, id, amount, image } = item;

            return (
                <div style={{ marginBottom: 116 }} className="Card" onClick={() => navigate('detail/' + id)} key={id}>
                    <div className="centainer">
                        <img src={image[0]} alt={title} />
                        <h2>Price: ${amount}</h2>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            );
        })
    )}
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
      
export default Category;
