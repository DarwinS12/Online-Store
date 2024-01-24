import { Button } from "./Button";
import { useProductsStore } from "../store/products";

export function ShopButtonsGroup({ product, productID }) {
  const quantity = useProductsStore((state) => state.quantity);
  const isInCart = useProductsStore((state) => state.isInCart);
  const setProductsInCart = useProductsStore(
    (state) => state.setProductsInCart
  );
  const setQuantity = useProductsStore((state) => state.setQuantity);

  return (
    <section className="flex flex-row gap-3 items-center justify-center">
      <Button
        arialLabel="decrease item quantity"
        onClick={() => setQuantity({ productID, type: "decrease" })}
        disabled={
          quantity[productID] === undefined || quantity[productID] <= 0
            ? true
            : false
        }
      >
        <img
          width={25}
          height={25}
          src="src\assets\cartDecreaseIcon.svg"
          alt="decrease quantity item icon"
        />
      </Button>
      <Button
        arialLabel="add item to cart or remove item from cart"
        onClick={() => setProductsInCart(product, productID)}
      >
        {isInCart[productID] && quantity[productID] > 0 ? (
          <img
            width={25}
            height={25}
            src="src\assets\cartRemoveIcon.svg"
            alt="remove item icon"
          />
        ) : (
          <img
            src="src\assets\cartIcon.svg"
            width={25}
            height={25}
            alt="cart icon"
          />
        )}
      </Button>
      <Button
        arialLabel="increase item quantity"
        onClick={() => setQuantity({ productID, type: "increase" })}
        disabled={
          quantity[productID] === undefined || quantity[productID] <= 0
            ? true
            : false
        }
      >
        <img
          width={25}
          height={25}
          src="src\assets\cartIncreaseIcon.svg"
          alt="increase quantity item icon"
        />
      </Button>
    </section>
  );
}
