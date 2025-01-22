import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } checkout flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black-500 cursor-pointer
          "
            onClick={() => context.closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
