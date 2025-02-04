import Layout from "../../components/layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative ">
        <h1>MyOrders</h1>
      </div>

      {context.order.map((order, index) => 
      (
        <Link key={index} to={`/MyOrders/${index}`}>
        <OrdersCard
          key={order.id}
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}
        />
        
      </Link>
      )
      
      )}
    </Layout>
  );
};
export default MyOrders;
