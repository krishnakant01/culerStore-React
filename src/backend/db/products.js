import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Adidas Nemeziz .3",
    price: "7500",
    categoryName: ["Adidas", "Nemeziz"],
    src: "/images/adidas-nemeziz-0.3-fg.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Adidas Predator Freak",
    price: "6500",
    categoryName: ["Adidas", "Predator"],
    src: "/images/adidas-predator-freak-fg.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Adidas X 19.1",
    price: "4500",
    categoryName: ["Adidas", "AdidasX"],
    src: "/images/adidas-x-19.1-sg.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Adidas X Speedflow+",
    price: "7500",
    categoryName: ["Adidas", "Nemeziz"],
    src: "/images/adidas-x-speedflow.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Nike Phantom GT II",
    price: "7500",
    categoryName: ["Nike", "Phantom"],
    src: "https://culer-store.netlify.app/images/nike-phantom-gt-II-pro-fg.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Puma Ultra Origin",
    price: "7500",
    categoryName: ["Puma"],
    src:
      "https://culer-store.netlify.app/images/puma-ultra-sl-tech-origin-gf.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Puma Future Z",
    price: "7500",
    categoryName: ["Puma"],
    src: "https://culer-store.netlify.app/images/puma-future-z-1.2-mg.png",
    wishlist: "false",
  },
  {
    _id: uuid(),
    name: "Nike Phantom Elite",
    price: "7500",
    categoryName: ["Nike", "Phantom"],
    src:
      "https://culer-store.netlify.app/images/nike-phantom-gt-II-elite-fg.png",
    wishlist: "false",
  },
];

// {
//   _id: uuid(),
//   title: "You are Winner",
//   author: "Junaid Qureshi",
//   price: "3000",
//   categoryName: "horror",
// },
// {
//   _id: uuid(),
//   title: "Think and Grow Rich",
//   author: "Shiv Khera",
//   price: "1000",
//   categoryName: "fiction",
// },
