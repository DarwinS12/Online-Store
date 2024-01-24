import { ShopButtonsGroup } from "../components/ShopButtonsGroup";

export function ProductsResults({ product }) {
  return (
    <>
      <h1 className="text-xl mt-2 text-black">{product.title}</h1>
      <section className="max-w-xl">
        <p className="text-balance text-base text-center text-sky-700">
          {product.description}
        </p>
      </section>
      <h2 className="text-2xl my-2 text-sky-600">{product.price}$</h2>
      <section className="flex mb-4">
        <div className="flex flex-col mx-8 gap-4">
          <img
            loading="lazy"
            src={product.images[1]}
            alt="product image 2"
            className="rounded-md shadow-md shadow-gray-400 w-30  md:w-48"
          />
          {product.images[2] ? (
            <img
              loading="lazy"
              src={product.images[2]}
              alt="product image 3"
              className="rounded-md shadow-md shadow-gray-400 w-30 md:w-48"
            />
          ) : (
            ""
          )}
        </div>
        <img
          loading="lazy"
          src={product.images[0]}
          alt="product image 1"
          className="rounded-md shadow-md shadow-gray-400 w-36 md:w-80 md:h-full "
        />
      </section>
      <ShopButtonsGroup productID={product.id} product={product} />
    </>
  );
}
