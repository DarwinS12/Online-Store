export const getProducts = async () => {
  const response = await fetch("http://localhost:5173/products.json");
  const data = await response.json();
  return data;
};
