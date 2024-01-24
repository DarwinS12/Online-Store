import { useProductsStore } from "../store/products";

export function CartAndCount({ width, height, desing, pictureClass }) {
  const productsInCart = useProductsStore((state) => state.productsInCart);

  return (
    <picture className={`relative flex items-center ${pictureClass}`}>
      <img
        src="src\assets\cartIcon.svg"
        alt="cart icon"
        width={width}
        height={height}
      />
      <span
        className={`bg-blue-300 text-white flex items-center justify-center absolute rounded-full -top-4 p-1 -right-3 text-base ${desing}`}
      >
        {productsInCart.length}
      </span>
    </picture>
  );
}
