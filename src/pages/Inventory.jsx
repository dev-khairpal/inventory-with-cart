import axios from "axios";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import Card from "../components/Card";

const Inventory = () => {
  const { product, setProduct } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProduct(data);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, [setProduct]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8 md:p-16">
    
      {product.map((item) => (
        <div key={item.id} className="flex justify-center">
          <div className="transform transition-transform duration-500 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden bg-white">
            <Card item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
