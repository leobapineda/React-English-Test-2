import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

// ----------->>>>>>>>> App
const AppProvider = ({ children }) => {
  // useState
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // ------>>>>>> fetchApi data
  async function fetchApi() {
    const res = await fetch(url);
    const data = await res.json();
    const keys = await getKeys(data);
    dispatch({ type: "SET_KEYS", payload: keys });
    setCart(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  // get products keys
  function getKeys(products) {
    const productsKeys = products.reduce((keys, product) => {
      if (keys[product.id] == null)
        keys[product.id] = {
          amount: 0,
          individualPrice: parseFloat(product.price),
          totalPrice: 0,
          title: product.title,
          price: product.price,
          img: product.img,
          id: product.id
        };
      return keys;
    }, {});
    return productsKeys;
  }
  // ------>>>>>> fetchApi data

  //------>>>>>> declare all my useReducer
  const initState = {
    products: {},
    totalPrice: 0,
    totalCount: 0,
  };

  const ACTIONS = {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE",
    TOTALPRICE: "TOTALPRICE",
    TOTALAMOUNT: "TOTALAMOUNT",
    REMOVE: "REMOVE",
    CLEAR: "CLEAR",
  };

  // --->>> REDUCE FUNCTION
  function reduce(state, action) {
    // console.log(action.payload);
    const { productID, newTotal, newAmount, newProducts } = action.payload;
    // console.log(newProducts);
    // console.log(newAmount);
    switch (action.type) {
      case "SET_KEYS":
        return { ...state, products: action.payload };
      case ACTIONS.INCREASE:
        return {
          ...state,
          products: {
            ...state.products,
            [productID]: {
              ...state.products[productID],
              amount: state.products[productID].amount + 1,
            },
          },
        };
      case ACTIONS.DECREASE:
        return {
          ...state,
          products: {
            ...state.products,
            [productID]: {
              ...state.products[productID],
              amount: state.products[productID].amount - 1,
            },
          },
        };
      case ACTIONS.REMOVE:
        return { ...state, products: newProducts };
      case ACTIONS.TOTALPRICE:
        return { ...state, totalPrice: newTotal };
      case ACTIONS.TOTALAMOUNT:
        return { ...state, totalCount: newAmount };
      case ACTIONS.CLEAR:
        return { products: {} };
      default:
        throw new Error();
    }
  }


  // remove item
  // para removerlo



  const [state, dispatch] = useReducer(reduce, initState);
  console.log(state);
  //------>>>>>> declare all my useReducer

  //------>>>>> dispatch ACTIONS
  function increaseProductAmount(productID) {
    dispatch({ type: ACTIONS.INCREASE, payload: { productID } });
  }

  function decreaseProductAmount(productID) {
    dispatch({ type: ACTIONS.DECREASE, payload: { productID } });
  }

  function setTotalPrice(newTotal) {
    dispatch({ type: ACTIONS.TOTALPRICE, payload: { newTotal } });
  }

  function setTotalAmount(newAmount) {
    dispatch({ type: ACTIONS.TOTALAMOUNT, payload: { newAmount } });
  }

      function removeCartProduct(id) {
        const newProductsArray = Object.entries(state.products).filter(
          (product) => product[0] !== id
        );
        const newProducts = Object.fromEntries(newProductsArray);
        dispatch({ type: ACTIONS.REMOVE, payload: { newProducts } });
      }

      function clearCart() {
        dispatch({ type: ACTIONS.CLEAR,payload: {  }});
        // TOTAL COUNT PASA A SER CERO
          // QUE SE BORREN LOS ELEMENTOS DE MI
        
      }
  //------>>>>> dispatch ACTIONS
  // console.log(state);

  useEffect(() => {
    getTotalPrice();
    getTotalCount();
  }, [state.products]);


  function getTotalPrice() {
    if (!state?.products) return;
    // console.log(state.products);
    const totalPrice = Object.values(state.products).reduce((total, pro) => {
      const { amount, individualPrice } = pro;
      total = total + individualPrice * amount;
      return total;
    }, 0);
    setTotalPrice(totalPrice);
  }


  function getTotalCount() {
    const totalCount = Object.values(state.products).reduce(
      (total, product) => {
        total = total + product.amount;
        return total;
      },
      0
    );
    setTotalAmount(totalCount);
  }

  return (
    <>
      <AppContext.Provider
        value={{
          cart,
          isLoading,
          state,
          increaseProductAmount,
          decreaseProductAmount,
          removeCartProduct,
          clearCart,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, AppProvider };
