import { createContext,useState} from "react";

 export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  //shopping cart Increment quantity
  const [count, setCount] = useState(0);

  //products details open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen (true);
  const closeProductDetail = () => setIsProductDetailOpen (false);

    //checkout 
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (false);
   
  

  //product detail. show product
  const [productToShow , setProductToShow] = useState({})

  //cart products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping cart Order
  const [order, setOrder] = useState([])
  



  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
     

    }}>
      {children}
    </ShoppingCartContext.Provider>
   
  )
}