import { ShopButtonsGroup } from "./ShopButtonsGroup";
import { useProductsStore } from "../store/products";

export function ProductInCart({ product }) {
  const quantity = useProductsStore((state) => state.quantity);

  return (
    <>
      <h1 className="text-xl mt-2 text-black">{product.title}</h1>
      <section className="flex mb-1 items-center gap-5">
        <img
          src={product.images[0]}
          alt="product image "
          className="rounded-md shadow-md shadow-gray-400 w-16 md:w-36 md:h-full "
        />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl my-2 text-sky-600">{product.price}$</h2>
          <span className="text-sm text-gray-600 flex items-center flex-row">
            Quantity:
          </span>
          <strong>{quantity[product.id]}</strong>
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 ">
        <ShopButtonsGroup productID={product.id} product={product} />
      </section>
    </>
  );
}
