import { useEffect } from "react";
import { SearchItem } from "../components/SearchItem";
import { useProductsStore } from "../store/products";
import { ProductsResults } from "../components/ProductsResults";
import { WithoutResults } from "../components/WithoutResults";

export function ResultsPage() {
  const products = useProductsStore((state) => state.products);
  const searchedProducts = useProductsStore((state) => state.searchedProducts);
  const setSearchedProducts = useProductsStore(
    (state) => state.setSearchedProducts
  );
  const itemSearched = useProductsStore((state) => state.itemSearched);
  const setItemSearched = useProductsStore((state) => state.setItemSearched);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setItemSearched(searchTerm);
    const singleItem = [...products].filter((newItem) =>
      newItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedProducts([...singleItem]);
  };

  return (
    <>
      <SearchItem handleSubmit={handleSubmit} />
      <header className="mb-8 text-lg mx-10 text-gray-700 font-semibold pt-36 md:text-xl">
        Search results for{" "}
        <strong className="text-sky-600">
          {itemSearched != "" ? itemSearched : ""}
        </strong>
        : {searchedProducts.length != 0 ? searchedProducts.length : ""}
      </header>
      <main>
        {searchedProducts.length === 0 ? (
          <WithoutResults />
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 mx-8 mb-10 gap-4 ">
            {searchedProducts?.map((product) => (
              <li
                className="border-b-2 border-sky-100 bg-gray-50 shadow-sm flex flex-col items-center justify-center gap-5 m-2  p-3"
                key={product.id}
              >
                <ProductsResults product={product} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
