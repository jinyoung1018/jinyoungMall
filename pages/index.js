import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("/products");
    const nextProducts = res.data.result;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <>
      <h1>JinyoungMall</h1>
      <SearchForm></SearchForm>
      <ProductList products={products} />
    </>
  );
}
