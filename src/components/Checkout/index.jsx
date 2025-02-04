import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);

  //Funcion para eliminar los productos del carrito
  const handleDelete = (id) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filterProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      data: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

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
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="p-6 mb-6">
        <p className="flex justify-between items-center mb-3">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            {" "}
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/MyOrders/last">
          <button
            className=" bg-black py-3 text-white w-full rounded"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Checkout;
