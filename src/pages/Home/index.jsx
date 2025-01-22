import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
       HOME
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
     
    </Layout>
  );
};
export default Home;
