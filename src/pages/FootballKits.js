import React from "react";

const FootballKits = () => {
  return (
    <div class="outest-grid-container">
      <div class="sidebar-container" id="kitsFilter">
        <div class="padding-075-1">
          <div class="filter-titles">
            <p class="gray-text bold-font">FILTERS</p>
            <button class="btn-link font-size-09">CLEAR ALL</button>
          </div>
          <div class="divider"></div>
          <ul class="filter-section padding-0-0 margin-0-0 list-style-none">
            <li>
              <p class="gray-text bold-font font-size-09 margin-0-0">SORT</p>
            </li>
            <li>
              <label class="font-size-09">
                <input
                  class="accent-color"
                  type="radio"
                  name="sort"
                  value="Price-High-to-Low"
                />
                Price High to Low
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input
                  class="accent-color"
                  type="radio"
                  name="sort"
                  value="Price-Low-to-High"
                />
                Price Low to High
              </label>
            </li>
            <div class="divider"></div>
            <li>
              <p class="gray-text bold-font font-size-09 margin-0-0">
                BARÇA KITS
              </p>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" value="home-kit" />
                Home Kit
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" value="away-kit" />
                Away Kit
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" value="third-kit" />
                Third Kit
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input
                  class="accent-color"
                  type="checkbox"
                  value="fourth-kit"
                />
                Fourth Kit
              </label>
            </li>
            <div class="divider"></div>
            <li>
              <p class="gray-text bold-font font-size-09 margin-0-0">GENDER</p>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" value="men" />
                Men
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" value="women" />
                Women
              </label>
            </li>
            <div class="divider"></div>
            <li>
              <p class="gray-text bold-font font-size-09 margin-0-0">
                RETRO KITS
              </p>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" />
                1899 Collection
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" />
                1974-75 Collection
              </label>
            </li>
            <li>
              <label class="font-size-09">
                <input class="accent-color" type="checkbox" />
                1980-81 Collection
              </label>
            </li>
            <div class="divider"></div>
            <li>
              <p class="gray-text bold-font font-size-09 margin-0-0">OTHER</p>
            </li>
            <li>
              <label class="font-size-09">
                <input
                  class="accent-color"
                  type="checkbox"
                  value="Include-Out-of-Stock"
                />
                Include Out of Stock
              </label>
            </li>
          </ul>
        </div>
      </div>

      <section class="main-container" id="productKits">
        <div class="grid-4-column-layout margin-2-auto">
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/men-home-kit-full.png"
                alt="product-image"
              />
              <span class="text-badge badge-primary">New</span>
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Home Kit</p>
            <p class="product-price">₹ 7500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/men-away-kit-full.png"
                alt="product-image"
              />
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Away Kit</p>
            <p class="product-price">₹ 6500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/men-third-kit-full.png"
                alt="product-image"
              />
              <span class="text-badge badge-primary">New</span>
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Third Kit</p>
            <p class="product-price">₹ 5000</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-ui.netlify.app/images/men-home-kit-jersey.png"
                alt="product-image"
              />
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Home Kit Jersey</p>
            <p class="product-price">₹ 4000</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-ui.netlify.app/images/men-away-kit-jersey.png"
                alt="product-image"
              />
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Away Kit Jersey</p>
            <p class="product-price">₹ 4500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/men-third-kit-jersey.png"
                alt="product-image"
              />
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Men Third Kit Jersey</p>
            <p class="product-price">₹ 6000</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-store.netlify.app/images/nike-phantom-gt-II-elite-fg.png"
                alt="product-image"
              />
              <span class="text-badge badge-secondary padding-05-1">
                25% off
              </span>
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Nike Phantom Elite</p>
            <p class="product-price">
              ₹ 7500{" "}
              <span class="font-weight-400 text-strike-through red-text">
                ₹10000
              </span>
            </p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
          <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
              <img
                src="https://culer-ui.netlify.app/images/gk-adidas-predator-pro.png"
                alt="product-image"
              />
              <span class="text-badge badge-primary">New</span>
              <button class="btn btn-wishlist">
                <span class="material-icons">favorite_border</span>
              </button>
            </div>
            <p class="product-name">Adidas Predator Pro</p>
            <p class="product-price">₹ 9600</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
              <span>
                <i class="fas fa-shopping-cart"> </i>
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { FootballKits };
