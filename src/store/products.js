import { create } from "zustand";
import { getProducts } from "../services/getProducts";
import { persist } from "zustand/middleware";

export const useProductsStore = create(
  persist(
    (set, get) => {
      return {
        products: [],

        fetchProducts: async () => {
          const data = await getProducts();
          const products = data;
          set({ products });
        },
        setProducts: (products) => set({ products }),
        searchedProducts: [],
        setSearchedProducts: (searchedProducts) => set({ searchedProducts }),
        searchTerm: "",
        setSearchTerm: (searchTerm) => set({ searchTerm }),
        itemSearched: "",
        setItemSearched: (itemSearched) => set({ itemSearched }),
        productsInCart: [],
        quantity: {},
        setQuantity: ({ productID, type }) => {
          const { productsInCart } = get();

          const productFiltered = productsInCart.filter(
            (newProduct) => newProduct.id !== productID
          );
          set((state) => {
            const currentQuantity = state.quantity[productID];
            if (currentQuantity !== undefined && type === "increase") {
              return {
                quantity: {
                  ...state.quantity,
                  [productID]: currentQuantity + 1,
                },
              };
            }
            if (currentQuantity === 1 && type === "decrease") {
              return {
                productsInCart: productFiltered,
                isInCart: { ...state.isInCart, [productID]: false },
                quantity: {
                  ...state.quantity,
                  [productID]: 0,
                },
              };
            }
            if (currentQuantity !== undefined && type === "decrease") {
              return {
                quantity: {
                  ...state.quantity,
                  [productID]: currentQuantity - 1,
                },
              };
            }
            return state;
          });
        },
        isInCart: {},
        setProductsInCart: (product, productID) => {
          const { productsInCart } = get();
          const productIndex = productsInCart.find(
            (newProduct) => newProduct.id === productID
          );
          const productFiltered = productsInCart.filter(
            (newProduct) => newProduct.id !== productID
          );
          if (!productIndex) {
            set((state) => ({
              productsInCart: [
                ...state.productsInCart,
                {
                  ...product,
                },
              ],
              isInCart: {
                ...state.isInCart,
                [productID]: true,
              },
              quantity: {
                ...state.quantity,
                [productID]: 1,
              },
            }));
          } else {
            set((state) => ({
              productsInCart: productFiltered,
              isInCart: { ...state.isInCart, [productID]: false },
              quantity: {
                ...state.quantity,
                [productID]: 0,
              },
            }));
          }
        },
      };
    },
    { name: "products" }
  )
);
