import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="background">
        <div className="overlay">
          <div className="icons">
            <div className="icon" onClick={() => navigate("/home/menu")}>
              <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006" alt="Menu" />
              <p>{t("menu")}</p>
            </div>
            <div className="icon" onClick={() => navigate("/home/stores")}>
              <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006" alt="Stores" />
              <p>{t("stores")}</p>
            </div>
            <div className="icon" onClick={() => navigate("/home/cart")}>
              <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006" alt="Cart" />
              <p>{t("cart")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
