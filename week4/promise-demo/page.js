import { allProductsFetch, oneProductFetch } from "./api.js";

allProductsFetch().then((allProducts) => {
  console.log(allProducts);
  allProducts.products.forEach((product) => {
    renderProduct(product.title, product.images, product.description);
  });
});

oneProductFetch().then((product) => {
  console.log(product);
});

const renderProduct = (title, images, description) => {
  const cardTemplate = document.querySelector("[card-template]");
  const cardCopy = cardTemplate.cloneNode(true);
  cardCopy.removeAttribute("card-template");
  cardCopy.querySelector("img").src = images[0];
  cardCopy.querySelector(".card-text").textContent = description;
  document.querySelector(".left-content").appendChild(cardCopy);
};
