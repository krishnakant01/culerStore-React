import React from "react";

const Boots = () => {
  return (
    <div className="outest-grid-container">
      <div className="sidebar-container" id="bootsFilter">
        <div className="padding-075-1">
          <div className="filter-titles">
            <p className="gray-text bold-font">FILTERS</p>
            <button className="btn-link font-size-09">CLEAR ALL</button>
          </div>
          <div className="divider"></div>
          <ul className="filter-section padding-0-0 margin-0-0 list-style-none">
            <li>
              <p className="gray-text bold-font font-size-09 margin-0-0">
                SORT
              </p>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="radio"
                  name="sort"
                  value="Price-High-to-Low"
                />
                Price High to Low
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="radio"
                  name="sort"
                  value="Price-Low-to-High"
                />
                Price Low to High
              </label>
            </li>
            <div className="divider"></div>
            <li>
              <p className="gray-text bold-font font-size-09 margin-0-0">
                BRAND
              </p>
            </li>
            <li>
              <label className="font-size-09">
                <input className="accent-color" type="checkbox" value="nike" />
                Nike
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="adidas"
                />
                Adidas
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input className="accent-color" type="checkbox" value="puma" />
                Puma
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="underarmour"
                />
                Under Armour
              </label>
            </li>
            <div className="divider"></div>
            <li>
              <p className="gray-text bold-font font-size-09 margin-0-0">
                MODEL
              </p>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="nemeziz"
                />
                Nemeziz
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="predator"
                />
                Predator
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="adidasx"
                />
                Adidas X
              </label>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="mercurial"
                />
                Mercurial
              </label>
            </li>
            <div className="divider"></div>
            <li>
              <p className="gray-text bold-font font-size-09 margin-0-0">
                OTHER
              </p>
            </li>
            <li>
              <label className="font-size-09">
                <input
                  className="accent-color"
                  type="checkbox"
                  value="Include-Out-of-Stock"
                />
                Include Out of Stock
              </label>
            </li>
          </ul>
        </div>
      </div>

      <section className="main-container" id="productBoots">
        <div className="grid-4-column-layout margin-2-auto">
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="/images/adidas-nemeziz-0.3-fg.png"
                alt="product-image"
              />
              <span className="text-badge badge-primary">New</span>
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Adidas Nemeziz 0.3</p>
            <p className="product-price">₹ 7500</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="/images/adidas-predator-freak-fg.png"
                alt="product-image"
              />
              <span className="text-badge badge-secondary padding-05-1">
                35% off
              </span>
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Adidas Predator Freak</p>
            <p className="product-price">
              ₹ 6500{" "}
              <span className="font-weight-400 text-strike-through red-text">
                ₹10000
              </span>
            </p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img src="/images/adidas-x-19.1-sg.png" alt="product-image" />
              <span className="text-badge badge-primary">New</span>
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Adidas X Speedflow</p>
            <p className="product-price">₹ 5000</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img src="/images/adidas-x-speedflow.png" alt="product-image" />
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Adidas X Speedflow</p>
            <p className="product-price">₹ 6000</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/nike-phantom-gt-II-pro-fg.png"
                alt="product-image"
              />
              <span className="text-badge badge-primary">New</span>
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Nike Phantom Pro</p>
            <p className="product-price">₹ 9600</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/puma-ultra-sl-tech-origin-gf.png"
                alt="product-image"
              />
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Puma Ultra Origin</p>
            <p className="product-price">₹ 4000</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/puma-future-z-1.2-mg.png"
                alt="product-image"
              />
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Puma Future Z</p>
            <p className="product-price">₹ 4500</p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div className=" card product-card text-badge-container">
            <div className="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/nike-phantom-gt-II-elite-fg.png"
                alt="product-image"
              />
              <span className="text-badge badge-secondary padding-05-1">
                25% off
              </span>
              <button className="btn btn-wishlist">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
            <p className="product-name">Nike Phantom Elite</p>
            <p className="product-price">
              ₹ 7500{" "}
              <span className="font-weight-400 text-strike-through red-text">
                ₹10000
              </span>
            </p>
            <button className=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i className="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Boots };
