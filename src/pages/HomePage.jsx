import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../Icons/SearchIcon";
import { useEffect, useState } from "react";
import { useProductsStore } from "../store/products";

export function HomePage() {
  const navigate = useNavigate();
  const products = useProductsStore((state) => state.products);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const setSearchedProducts = useProductsStore(
    (state) => state.setSearchedProducts
  );
  const setItemSearched = useProductsStore((state) => state.setItemSearched);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { item } = Object.fromEntries(new window.FormData(e.target));
    setItemSearched(item);
    const singleItem = products.filter((newItem) =>
      newItem.title.toLowerCase().includes(item.toLowerCase())
    );
    setSearchedProducts([...singleItem]);
    navigate("/Results", {
      replace: false,
    });
  };

  return (
    <main className="flex flex-col items-center justify-center my-4 mt-20 md:h-screen md:mt-0 md:w-full w-96 gap-16 ">
      <h1 className="text-4xl text-bold text-sky-800 ">Online store</h1>
      <section className="flex flex-col mx-auto text-center gap-10 md:flex-row mt-8 md:justify-center md:items-center items-center justify-center">
        <img
          src="src\assets\OptShipping.svg"
          alt="Delivery car icon"
          className="w-32 h-50 md:w-96"
        />
        <form
          className=" flex items-center justify-center  text-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="item"
            placeholder="SmartPhone"
            className="bg-gray-200 rounded-md items-center justify-center outline-none transition-all text-sky-600 focus:bg-gray-300 focus:outline-none  p-2 text-sm md:text-xl w-48 sm:w-80"
          />
          <button className="hover:bg-sky-200 transition-colors p-2 rounded-full mx-2">
            <SearchIcon />
          </button>
        </form>
      </section>
    </main>
  );
}
