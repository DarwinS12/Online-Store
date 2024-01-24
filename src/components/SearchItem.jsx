import { SearchIcon } from "../Icons/SearchIcon";
import { CartAndCount } from "./CartAndCount";
import { Link } from "react-router-dom";
import { useProductsStore } from "../store/products";

export function SearchItem({ handleSubmit }) {
  const searchTerm = useProductsStore((state) => state.searchTerm);
  const setSearchTerm = useProductsStore((state) => state.setSearchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="bg-transparent w-full text-2xl p-4 px-6 flex flex-row items-center justify-between mb-10 header-results pb-8">
        <img
          src="src\assets\OptShop.svg"
          alt="Store Icon "
          width={26}
          height={26}
        />

        <form
          className=" flex items-center"
          onSubmit={(e) => handleSubmit(e, searchTerm)}
        >
          <input
            type="text"
            name="item"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
            placeholder="SmartPhone"
            className="bg-gray-200 rounded-md outline-none transition-all text-sky-700 focus:bg-gray-300 focus:outline-none  p-2 text-xl w-48 sm:w-80"
          />
          <button
            aria-label="look for item"
            className="hover:bg-sky-200 transition-colors p-2 rounded-full mx-2"
          >
            <SearchIcon />
          </button>
        </form>
        <button
          aria-labelledby="cart"
          className="hover:bg-sky-200 transition-colors flex items-center p-2 rounded-full"
        >
          <Link id="cart" to={"/Cart"}>
            <CartAndCount desing={" w-5 h-5 text-sm"} width={25} height={25} />
          </Link>
        </button>
      </header>
    </>
  );
}
