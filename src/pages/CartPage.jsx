import { Button } from "../components/Button";
import { CartAndCount } from "../components/CartAndCount";
import { Link } from "react-router-dom";
import { useProductsStore } from "../store/products";
import { ProductInCart } from "../components/ProductInCart";

export function CartPage() {
  const productsInCart = useProductsStore((state) => state.productsInCart);

  return (
    <>
      <header className="bg-transparent text-2xl p-4 bg-sky-100 flex flex-row items-center justify-start ml-6 mt-6">
        <Button
          arialLabel="go to result page"
          desing={"items-center gap-2 w-auto"}
        >
          <Link to={"/Results"}>
            <img
              src="src\assets\OptShop.svg"
              alt="Store Icon"
              width={48}
              height={48}
            />
            ←
          </Link>
        </Button>
      </header>
      <main
        className=" 
       bg-gray-200  mx-auto w-[300px] md:w-[800px] rounded-lg  md:mx-auto flex flex-col items-center justify-center py-4 px-2"
      >
        <CartAndCount
          width={46}
          height={46}
          pictureClass={"mt-8"}
          desing={"w-6 h-6"}
        />
        <section className="m-2 w-22 p-2 md:w-96 ">
          {productsInCart.map((product) => (
            <li
              className=" bg-black/20  backdrop-blur-sm shadow-lg shadow-black/30 flex flex-col items-center justify-center gap-5 m-6 rounded-lg p-3"
              key={product.id}
            >
              <ProductInCart product={product} />
            </li>
          ))}
        </section>
      </main>
    </>
  );
}
