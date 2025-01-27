import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);

  //Funcion para eliminar los productos del carrito
  const handleDelete = (id) => {
    const filterProducts = context.cartProducts.filter(product => product.id != id);
    context.setCartProducts(filterProducts);
  }
 

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black-500 cursor-pointer
          "
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
      {context.cartProducts.map((product) => (
        <OrderCard 
        key={product.id}
        id= {product.id}
        title= {product.title}
        imageUrl= {product.images}
        price= {product.price}
        handleDelete= {handleDelete}

        
        />

      ))}

      </div>
     
    </aside>
  );
};

export default Checkout;
