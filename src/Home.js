import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="background">
        <div className="overlay">
          <div className="icons">
            <div className="icon" onClick={() => navigate("/home/menu")}>
              <img src="/icons/menu.png" alt="Menu" />
              <p>MENU</p>
            </div>
            <div className="icon" onClick={() => navigate("/home/stores")}>
              <img src="/icons/stores.png" alt="Stores" />
              <p>STORES</p>
            </div>
            <div className="icon" onClick={() => navigate("/home/cart")}>
              <img src="/icons/cart.png" alt="Cart" />
              <p>CART</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
