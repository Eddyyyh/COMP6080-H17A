// https://dummyjson.com/
export const allProductsFetch = () => {
  const allProductsPromise = fetch("https://dummyjson.com/products/").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      }
      return Promise.reject(response);
    }
  );
  return allProductsPromise;
};

export const oneProductFetch = () => {
  return fetch("https://dummyjson.com/products/1").then((response) =>
    response.json()
  );
};
