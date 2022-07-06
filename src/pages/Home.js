import React from "react";

const Home = () => {
  return (
    <div>
      <div className="overlay-image-container">
        <img
          className="image-responsive"
          src="images/retro.png"
          alt="retro kits"
        />
        <div className="overlay-banner-text">
          <p className="banner-img-description">BACK TO RETRO</p>
          <button className="btn btn-contained-primary">SHOP NOW</button>
        </div>
      </div>

      <div className="banner-cards">
        <span className="material-icons btn-navigate">navigate_before</span>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/retro-dejong-home.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">VINTAGE 1899 COLLECTION </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>

        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/retro-dejong.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              VINTAGE 1974-75 COLLECTION
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/retro-pedri.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">VINTAGE CAPTAIN'S SHIRT</p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/retro-garcia.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              VINTAGE 1980-81 COLLECTION
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <span className="material-icons btn-navigate">navigate_next</span>
      </div>

      <div className="spacer-div light-gradient-card"></div>

      <div className="overlay-image-container">
        <img
          className="image-responsive"
          src="images/barca-kits.png"
          alt="barca kits"
        />
        <div className="overlay-banner-text">
          <p className="banner-img-description">BARÇA KITS</p>
          <button className="btn btn-contained-primary">SHOP NOW</button>
        </div>
      </div>
      <div className="banner-cards">
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/fcb-third-kit.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              {" "}
              2021-22 THIRD KIT COLLECTION{" "}
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/trending-home-kit.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              2021-22 HOME KIT COLLECTION
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/trending-men-away-kit.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              2021-22 AWAY KIT COLLECTION
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image image-responsive"
            src="/images/fourth-kit.png"
            alt="kits"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">
              2021-22 FOURTH KIT COLLECTION
            </p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="spacer-div light-gradient-card"></div>
      <div className="overlay-image-container">
        <img
          className="image-responsive"
          src="images/football-boots-banner.png"
          alt="adidas shoes"
        />
        <div className="overlay-banner-text">
          <p className="banner-img-description">SHOES</p>
          <button className="btn btn-contained-primary">SHOP NOW</button>
        </div>
      </div>
      <div className="banner-cards">
        <span className="material-icons btn-navigate">navigate_before</span>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/adidas-nemeziz-0.3-fg.png"
            alt="shoes"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">ADIDAS NEMEZIZ</p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/adidas-predator-freak-fg.png"
            alt="shoes"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">ADIDAS PREDATOR</p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/adidas-x-19.1-sg.png"
            alt="shoes"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">ADIDAS X</p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <div className="overlay-card dark-gradient-card">
          <img
            className="overlay-card-image"
            src="/images/adidas-x-speedflow.png"
            alt="shoes"
          />
          <div className="overlay-text">
            <p className="overlay-img-description">ADIDAS SPEEDFLOW</p>
            <button className="btn btn-contained-primary">SHOP NOW</button>
          </div>
        </div>
        <span className="material-icons btn-navigate">navigate_next</span>
      </div>
      <div className="spacer-div light-gradient-card"></div>
    </div>
  );
};

export { Home };
