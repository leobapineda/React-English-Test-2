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
  // const [totalAmount, setTotalAmount] = useState
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
  };

  // --->>> REDUCE FUNCTION
  function reduce(state, action) {
    // console.log(action.payload);
    const { productID, newTotal, newAmount } = action.payload;
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
      case ACTIONS.TOTALPRICE:
        return { ...state, totalPrice: newTotal };
      case ACTIONS.TOTALAMOUNT:
        return { ...state, totalCount: newAmount };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reduce, initState);
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
  //------>>>>> dispatch ACTIONS
  // console.log(state);

  useEffect(() => {
    getTotalPrice();
    getTotalCount();
  }, [state.products]);

  // guardar en un estado o solo cambiarlo

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

  // get the amount of each product
  // sumarlo y regresar el valor final

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
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, AppProvider };
